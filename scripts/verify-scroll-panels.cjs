/* Exercise the opt-in animation with a deterministic clock and input events. */
const {strict: assert} = require('node:assert');
const {readFileSync} = require('node:fs');
const {runInNewContext} = require('node:vm');
class Element {
  constructor() { this.events = {}; this.attributes = {}; this.hidden = false; this.disabled = false; }
  addEventListener(type, fn) { (this.events[type] ||= []).push(fn); }
  emit(type, event = {}) { (this.events[type] || []).forEach(fn => fn(event)); }
  setAttribute(key, value) { this.attributes[key] = value; }
}
const viewport = Object.assign(new Element(), {id: 'resources-scroll', scrollTop: 0, scrollHeight: 800, clientHeight: 300, contains: element => element === viewport});
const play = new Element(), expand = new Element(), actions = new Element();
const classes = new Set();
const panel = {
  querySelector: selector => ({'[role="region"]': viewport, '[data-scroll-play]': play, '[data-scroll-expand]': expand, '.scroll-panel-actions': actions})[selector],
  style: {setProperty() {}},
  classList: {contains: x => classes.has(x), toggle: x => { if (classes.has(x)) { classes.delete(x); return false; } classes.add(x); return true; }}
};
const document = Object.assign(new Element(), {hidden: false, querySelectorAll: () => [panel]});
const motion = Object.assign(new Element(), {matches: false});
let observer, next = 0, time = 0;
const frames = new Map();
const context = {
  document,
  window: {matchMedia: () => motion, IntersectionObserver: true},
  IntersectionObserver: class { constructor(fn) { observer = fn; } observe() {} },
  requestAnimationFrame: fn => { frames.set(++next, fn); return next; },
  cancelAnimationFrame: id => frames.delete(id)
};
runInNewContext(readFileSync('assets/js/scroll-panels.js', 'utf8'), context);
const advance = milliseconds => { for (let spent = 0; spent < milliseconds; spent += 50) { time += 50; const batch = [...frames.values()]; frames.clear(); batch.forEach(fn => fn(time)); } };
assert.equal(frames.size, 0, 'static by default');
play.emit('click'); advance(4000);
assert(viewport.scrollTop > 0, 'moves after the initial reading pause');
viewport.emit('pointerenter', {pointerType: 'mouse'});
const hoveredAt = viewport.scrollTop; advance(2000);
assert.equal(viewport.scrollTop, hoveredAt, 'hover suspends motion');
viewport.emit('pointerleave'); advance(2000);
assert(viewport.scrollTop > hoveredAt, 'leaving resumes requested motion');
viewport.emit('touchstart'); const touchedAt = viewport.scrollTop; advance(2000);
assert.equal(viewport.scrollTop, touchedAt, 'touch pauses until explicitly restarted');
assert.equal(play.attributes['aria-pressed'], 'false');
play.emit('click'); observer([{isIntersecting: false}]); advance(3000);
assert.equal(viewport.scrollTop, touchedAt, 'offscreen pane does not animate');
observer([{isIntersecting: true}]); advance(4000);
assert(viewport.scrollTop > touchedAt);
document.hidden = true; document.emit('visibilitychange'); const hiddenAt = viewport.scrollTop; advance(4000);
assert.equal(viewport.scrollTop, hiddenAt, 'background tab is suspended');
document.hidden = false; document.emit('visibilitychange'); advance(4000);
viewport.emit('focusin'); const focusedAt = viewport.scrollTop; advance(2000);
assert.equal(viewport.scrollTop, focusedAt, 'keyboard focus suspends motion');
viewport.emit('keydown'); viewport.emit('focusout', {relatedTarget: null});
assert.equal(frames.size, 0, 'keyboard input pauses until restarted');
viewport.scrollTop = 499; play.emit('click'); advance(2500);
assert.equal(viewport.scrollTop, 500, 'holds at the bottom before looping');
advance(2500); assert(viewport.scrollTop < 10, 'loops to the beginning');
expand.emit('click'); assert(classes.has('is-expanded')); assert(play.disabled); assert.equal(frames.size, 0);
expand.emit('click'); assert(!classes.has('is-expanded')); assert(!play.disabled);
motion.matches = true; motion.emit('change'); play.emit('click'); advance(3000);
assert(play.hidden); assert.equal(frames.size, 0, 'reduced motion suppresses animation');
console.log('Scroll panels verified: opt-in, hover/focus/input pauses, visibility, loop dwell, expand, and reduced motion.');
