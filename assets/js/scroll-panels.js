/* Manual reading panes with an optional full-list view. */
(() => {
  'use strict';
  document.querySelectorAll('[data-scroll-panel]').forEach(panel => {
    const viewport = panel.querySelector('[role="region"]');
    const expand = panel.querySelector('[data-scroll-expand]');
    const label = expand.querySelector('[data-expand-label]');
    const hint = panel.querySelector('[data-scroll-hint]');
    const name = viewport.id === 'resources-scroll' ? 'resources' : 'Rednote blogs';
    const progress = () => {
      const maximum = Math.max(0, viewport.scrollHeight - viewport.clientHeight);
      panel.style.setProperty('--scroll-progress', `${maximum ? 100 * viewport.scrollTop / maximum : 100}%`);
    };
    expand.addEventListener('click', () => {
      const expanded = panel.classList.toggle('is-expanded');
      label.textContent = expanded ? 'Show less' : 'Show all';
      hint.textContent = expanded ? 'Full list' : 'Scroll to explore';
      expand.setAttribute('aria-expanded', String(expanded));
      expand.setAttribute('aria-label', `${expanded ? 'Show fewer' : 'Show all'} ${name}`);
      progress();
    });
    viewport.addEventListener('scroll', progress, {passive: true});
    if ('ResizeObserver' in window) new ResizeObserver(progress).observe(viewport);
    panel.querySelector('.scroll-panel-actions').hidden = false;
    progress();
  });
})();
