(function () {
  var debounceMs = 100;
  var resizeTimer = null;

  function toNumberPx(value) {
    var n = parseFloat(value);
    return isFinite(n) ? n : 0;
  }

  function normalizeText(text) {
    return String(text || '')
      .replace(/^\s+|\s+$/g, '')
      .replace(/\s+/g, ' ');
  }

  function textGaps(text) {
    var s = normalizeText(text);
    return Math.max(0, s.length - 1);
  }

  function fitLockup(lockup) {
    if (!lockup || !lockup.querySelector) return;

    var title = lockup.querySelector('.logo-title');
    var subtitle = lockup.querySelector('.logo-subtitle');
    if (!title || !subtitle) return;

    title.style.whiteSpace = 'nowrap';
    subtitle.style.whiteSpace = 'nowrap';
    title.style.display = 'inline-block';
    subtitle.style.display = 'inline-block';

    // Reset to the CSS-defined baseline before measuring.
    subtitle.style.letterSpacing = '';

    var titleWidth = title.getBoundingClientRect().width;
    if (!(titleWidth > 0)) return;

    var gaps = textGaps(subtitle.textContent);
    if (gaps === 0) return;

    var cs = window.getComputedStyle ? getComputedStyle(subtitle) : null;
    var baseLs = cs ? toNumberPx(cs.letterSpacing) : 0;

    // Lock baseline into px so subsequent adjustments are stable.
    var ls = baseLs;
    subtitle.style.letterSpacing = ls.toFixed(4) + 'px';

    // Iteratively converge (sub-pixel) toward an equal-width lockup.
    for (var pass = 0; pass < 4; pass++) {
      var width = subtitle.getBoundingClientRect().width;
      if (!(width > 0)) return;

      var d = titleWidth - width;
      if (Math.abs(d) < 0.25) break;

      ls = ls + (d / gaps);
      subtitle.style.letterSpacing = ls.toFixed(4) + 'px';
    }
  }

  function run() {
    var lockups = document.querySelectorAll('.logo-lockup');
    for (var i = 0; i < lockups.length; i++) {
      fitLockup(lockups[i]);
    }
  }

  function schedule() {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(run, debounceMs);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }

  window.addEventListener('resize', schedule);

  // Re-run once fonts have loaded (if supported).
  if (document.fonts && document.fonts.ready && typeof document.fonts.ready.then === 'function') {
    document.fonts.ready.then(run)["catch"](function () {});
  } else {
    // Best-effort fallback for older browsers.
    setTimeout(run, 0);
  }
})();