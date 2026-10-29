/* Homepage controls. No remote data requests or third-party runtime dependencies. */
(() => {
  'use strict';

  const controls = document.getElementById('publication-controls');
  if (controls) {
    const papers = [...document.querySelectorAll('.paper-box[data-paper-id]')];
    const earlierWork = document.getElementById('earlier-work-list');
    const earlierCount = earlierWork ? earlierWork.querySelectorAll('li').length : 0;
    const status = document.getElementById('publication-status');
    const empty = document.getElementById('publication-empty');
    const views = [...controls.querySelectorAll('[data-view]')];
    const topics = [...controls.querySelectorAll('[data-filter]')];
    let view = 'highlights';
    let topic = 'all';

    const apply = () => {
      let visibleCount = 0;
      papers.forEach(paper => {
        const matchesView = view === 'all' || paper.dataset.highlight === 'true';
        const matchesTopic = topic === 'all' || paper.dataset.interest === topic;
        paper.hidden = !(matchesView && matchesTopic);
        if (!paper.hidden) visibleCount++;
      });
      if (earlierWork) {
        earlierWork.hidden = !(view === 'all' && (topic === 'all' || topic === '3'));
        if (!earlierWork.hidden) visibleCount += earlierCount;
      }
      document.querySelectorAll('.interest-heading').forEach(heading => {
        const hasPapers = papers.some(paper => !paper.hidden && paper.dataset.interest === heading.dataset.interest);
        const hasEarlier = heading.dataset.interest === '3' && earlierWork && !earlierWork.hidden;
        heading.hidden = !hasPapers && !hasEarlier;
      });
      views.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.view === view)));
      topics.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === topic)));
      const scope = topic === 'all' ? '' : ' in this topic';
      status.textContent = `${visibleCount} ${view === 'highlights' ? 'highlighted ' : ''}${visibleCount === 1 ? 'publication' : 'publications'}${scope}`;
      empty.hidden = visibleCount > 0;
    };

    views.forEach(button => button.addEventListener('click', () => { view = button.dataset.view; apply(); }));
    topics.forEach(button => button.addEventListener('click', () => { topic = button.dataset.filter; apply(); }));
    empty.querySelector('[data-show-all]').addEventListener('click', () => {
      view = 'all';
      apply();
      views.find(button => button.dataset.view === 'all').focus();
    });
    apply();
    controls.hidden = false;
  }

  const sayButton = document.getElementById('name-say-btn');
  const audio = document.getElementById('name-say-audio');
  const audioStatus = document.getElementById('name-say-status');
  if (sayButton && audio) {
    const reset = () => { sayButton.classList.remove('is-playing'); };
    sayButton.addEventListener('click', async () => {
      try {
        audio.currentTime = 0;
        await audio.play();
        sayButton.classList.add('is-playing');
        audioStatus.textContent = 'Playing name pronunciation.';
      } catch (_) {
        reset();
        audioStatus.textContent = 'Name audio could not be played. Please try again.';
      }
    });
    audio.addEventListener('ended', () => { reset(); audioStatus.textContent = ''; });
    audio.addEventListener('error', reset);
  }

  const time = document.getElementById('contact-local-time');
  if (time) {
    const updateTime = () => {
      try {
        time.textContent = new Intl.DateTimeFormat('en-US', {
          timeZone: time.dataset.timezone || 'America/New_York',
          hour: 'numeric', minute: '2-digit', hour12: true
        }).format(new Date());
      } catch (_) { time.textContent = '—'; }
    };
    updateTime();
    setInterval(updateTime, 60000);
  }

  const nav = document.getElementById('site-nav');
  const toggle = nav && nav.querySelector('.nav-toggle');
  const closeNav = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };
  if (nav && toggle) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('keydown', event => {
      if (event.key === 'Escape') { closeNav(); toggle.focus(); }
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));
    document.addEventListener('click', event => { if (!nav.contains(event.target)) closeNav(); });
    window.matchMedia('(min-width: 768px)').addEventListener('change', closeNav);
  }

  // A link to a research philosophy opens the destination, including its ancestors.
  const revealHash = () => {
    if (!location.hash) return;
    let target;
    try { target = document.getElementById(decodeURIComponent(location.hash.slice(1))); }
    catch (_) { return; }
    if (!target) return;
    for (let parent = target.parentElement; parent; parent = parent.parentElement) {
      if (parent.tagName === 'DETAILS') parent.open = true;
    }
    if (target.tagName === 'DETAILS') target.open = true;
    else if (target.nextElementSibling?.tagName === 'DETAILS') target.nextElementSibling.open = true;
  };
  window.addEventListener('hashchange', revealHash);
  revealHash();
})();
