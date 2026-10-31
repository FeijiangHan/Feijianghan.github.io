/* Verify full-list toggling and manual scroll progress without animation APIs. */
const {strict: assert} = require('node:assert');
const {readFileSync} = require('node:fs');
const {runInNewContext} = require('node:vm');
class Element {
  constructor() { this.events = {}; this.attributes = {}; }
  addEventListener(type, fn) { this.events[type] = fn; }
  setAttribute(key, value) { this.attributes[key] = value; }
}
const viewport = Object.assign(new Element(), {id: 'resources-scroll', scrollTop: 0, scrollHeight: 800, clientHeight: 300});
const label = {}, hint = {}, actions = {hidden: true};
const expand = Object.assign(new Element(), {querySelector: () => label});
const classes = new Set();
let progress;
const panel = {
  querySelector: selector => ({'[role="region"]': viewport, '[data-scroll-expand]': expand, '[data-scroll-hint]': hint, '.scroll-panel-actions': actions})[selector],
  style: {setProperty: (key, value) => { progress = value; }},
  classList: {toggle: x => { if (classes.has(x)) { classes.delete(x); return false; } classes.add(x); return true; }}
};
runInNewContext(readFileSync('assets/js/scroll-panels.js', 'utf8'), {document: {querySelectorAll: () => [panel]}, window: {}});
assert.equal(actions.hidden, false);
assert.equal(viewport.scrollTop, 0, 'initialization never moves the content');
assert.equal(progress, '0%');
viewport.scrollTop = 250; viewport.events.scroll(); assert.equal(progress, '50%');
expand.events.click();
assert(classes.has('is-expanded')); assert.equal(label.textContent, 'Show less');
assert.equal(hint.textContent, 'Full list'); assert.equal(expand.attributes['aria-expanded'], 'true');
expand.events.click();
assert(!classes.has('is-expanded')); assert.equal(label.textContent, 'Show all');
assert.equal(hint.textContent, 'Scroll to explore'); assert.equal(expand.attributes['aria-expanded'], 'false');
assert.equal(viewport.scrollTop, 250, 'toggling never sets the scroll position');
console.log('Manual reading panes verified: full-list toggle, accessible labels, progress, and no automatic motion.');
