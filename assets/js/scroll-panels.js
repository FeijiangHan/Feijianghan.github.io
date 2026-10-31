/* Opt-in reading-pane motion. Manual scrolling never changes page-scroll behavior. */
(() => {
  'use strict';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('[data-scroll-panel]').forEach(panel => {
    const viewport = panel.querySelector('[role="region"]');
    const play = panel.querySelector('[data-scroll-play]');
    const expand = panel.querySelector('[data-scroll-expand]');
    const name = viewport.id === 'resources-scroll' ? 'Resources' : 'Rednote blogs';
    let enabled = false, hovered = false, focused = false, inView = true;
    let frame = null, previous = null, position = viewport.scrollTop, dwell = 1800;
    const maximum = () => Math.max(0, viewport.scrollHeight - viewport.clientHeight);
    const progress = () => panel.style.setProperty('--scroll-progress', `${maximum() ? 100 * viewport.scrollTop / maximum() : 100}%`);
    const canRun = () => enabled && !hovered && !focused && inView && !document.hidden && !reducedMotion.matches;
    const sync = () => {
      if (frame !== null) cancelAnimationFrame(frame);
      frame = null;
      previous = null;
      if (canRun()) { position = viewport.scrollTop; frame = requestAnimationFrame(tick); }
    };
    const setEnabled = value => {
      enabled = value && !reducedMotion.matches && !panel.classList.contains('is-expanded') && maximum() > 0;
      play.textContent = enabled ? 'Pause' : 'Auto-scroll';
      play.setAttribute('aria-pressed', String(enabled));
      play.setAttribute('aria-label', `${enabled ? 'Pause' : 'Start'} auto-scrolling ${name}`);
      sync();
    };
    const tick = now => {
      frame = null;
      if (!canRun()) return;
      const elapsed = previous === null ? 0 : Math.min(now - previous, 64);
      previous = now;
      if (dwell > 0) dwell = Math.max(0, dwell - elapsed);
      else if (position >= maximum()) {
        position = 0;
        viewport.scrollTop = 0;
        dwell = 1800;
      } else {
        position = Math.min(maximum(), position + elapsed * .018);
        viewport.scrollTop = position;
        if (position >= maximum()) dwell = 2200;
      }
      progress();
      frame = requestAnimationFrame(tick);
    };
    play.addEventListener('click', () => { dwell = 1800; setEnabled(!enabled); });
    expand.addEventListener('click', () => {
      setEnabled(false);
      const expanded = panel.classList.toggle('is-expanded');
      expand.textContent = expanded ? 'Collapse' : 'Expand';
      expand.setAttribute('aria-expanded', String(expanded));
      play.disabled = expanded;
      progress();
    });
    // Hover/focus suspend temporarily; direct input pauses until explicitly restarted.
    viewport.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') { hovered = true; sync(); } });
    viewport.addEventListener('pointerleave', () => { hovered = false; sync(); });
    viewport.addEventListener('focusin', () => { focused = true; sync(); });
    viewport.addEventListener('focusout', event => { focused = viewport.contains(event.relatedTarget); sync(); });
    ['pointerdown', 'touchstart', 'wheel', 'keydown'].forEach(type => viewport.addEventListener(type, () => setEnabled(false), {passive: true}));
    viewport.addEventListener('scroll', progress, {passive: true});
    document.addEventListener('visibilitychange', sync);
    const motionChanged = () => { play.hidden = reducedMotion.matches; if (reducedMotion.matches) setEnabled(false); };
    reducedMotion.addEventListener('change', motionChanged);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(entries => { inView = entries[0].isIntersecting; sync(); }, {threshold: 0}).observe(viewport);
    }
    if ('ResizeObserver' in window) new ResizeObserver(progress).observe(viewport);
    panel.querySelector('.scroll-panel-actions').hidden = false;
    motionChanged();
    progress();
  });
})();
