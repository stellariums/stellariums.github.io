/*
 * Homepage micro-interactions: scroll progress bar, rotating role text,
 * count-up stats, photo tilt, and active-section highlighting in the nav.
 */
(function () {
  if (!document.getElementById("hero")) {
    return;
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initProgressBar() {
    var bar = document.getElementById("scroll-progress");
    if (!bar) {
      return;
    }
    var ticking = false;
    function update() {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var ratio = max > 0 ? window.scrollY / max : 0;
      bar.style.transform = "scaleX(" + ratio.toFixed(4) + ")";
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    }, { passive: true });
    update();
  }

  // Types and deletes each role phrase in turn. Reads phrases for the active language.
  function initRoleTyper() {
    var el = document.getElementById("role-typer");
    if (!el) {
      return;
    }
    function phrases() {
      var lang = document.documentElement.classList.contains("lang-zh") ? "zh" : "en";
      try {
        return JSON.parse(el.getAttribute("data-roles-" + lang)) || [];
      } catch (err) {
        return [];
      }
    }
    if (reduceMotion) {
      el.textContent = phrases()[0] || "";
      return;
    }

    var phraseIndex = 0;
    var charIndex = 0;
    var deleting = false;
    var lastLang = null;

    function tick() {
      var list = phrases();
      var lang = document.documentElement.classList.contains("lang-zh");
      if (lang !== lastLang) {
        lastLang = lang;
        phraseIndex = 0;
        charIndex = 0;
        deleting = false;
      }
      if (!list.length) {
        return;
      }
      var current = Array.from(list[phraseIndex % list.length]);
      charIndex += deleting ? -1 : 1;
      el.textContent = current.slice(0, charIndex).join("");

      var delay = deleting ? 35 : 85;
      if (!deleting && charIndex >= current.length) {
        deleting = true;
        delay = 1800;
      } else if (deleting && charIndex <= 0) {
        deleting = false;
        phraseIndex++;
        delay = 350;
      }
      window.setTimeout(tick, delay);
    }
    tick();
  }

  function initCounters() {
    var counters = document.querySelectorAll("[data-count-to]");
    if (!counters.length) {
      return;
    }
    function run(el) {
      var target = parseInt(el.getAttribute("data-count-to"), 10) || 0;
      if (reduceMotion) {
        el.textContent = target;
        return;
      }
      var duration = 1400;
      var start = null;
      function frame(ts) {
        if (start === null) {
          start = ts;
        }
        var p = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased);
        if (p < 1) {
          window.requestAnimationFrame(frame);
        }
      }
      window.requestAnimationFrame(frame);
    }
    if (!("IntersectionObserver" in window)) {
      counters.forEach(run);
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          run(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) {
      observer.observe(el);
    });
  }

  function initTilt() {
    if (reduceMotion || !window.matchMedia("(hover: hover)").matches) {
      return;
    }
    document.querySelectorAll("[data-tilt]").forEach(function (card) {
      var maxDeg = 6;
      card.addEventListener("pointermove", function (e) {
        var rect = card.getBoundingClientRect();
        var px = (e.clientX - rect.left) / rect.width - 0.5;
        var py = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = "perspective(900px) rotateY(" + (px * maxDeg) + "deg) rotateX(" + (-py * maxDeg) + "deg)";
        card.style.setProperty("--glare-x", ((px + 0.5) * 100) + "%");
        card.style.setProperty("--glare-y", ((py + 0.5) * 100) + "%");
      });
      card.addEventListener("pointerleave", function () {
        card.style.transform = "";
      });
    });
  }

  function initActiveNav() {
    if (!("IntersectionObserver" in window)) {
      return;
    }
    var links = {};
    document.querySelectorAll('nav a[href*="#"]').forEach(function (a) {
      var id = a.getAttribute("href").split("#")[1];
      if (id) {
        (links[id] = links[id] || []).push(a);
      }
    });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }
        Object.keys(links).forEach(function (id) {
          links[id].forEach(function (a) {
            a.classList.toggle("nav-active", id === entry.target.id);
          });
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(links).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });
  }

  initProgressBar();
  initRoleTyper();
  initCounters();
  initTilt();
  initActiveNav();
}());
