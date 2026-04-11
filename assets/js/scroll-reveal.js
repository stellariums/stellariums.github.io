(function () {
  var isHomePage = window.location.pathname === "/" || document.getElementById("hero");
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!isHomePage) {
    return;
  }

  var hero = document.getElementById("hero");

  if (hero) {
    var heroPrimaryColumn = hero.querySelector(".col-span-12.lg\\:col-span-7");

    if (heroPrimaryColumn) {
      Array.prototype.slice.call(heroPrimaryColumn.children).forEach(function (node, index) {
        if (!node.hasAttribute("data-reveal")) {
          node.setAttribute("data-reveal", "item");
          node.setAttribute("data-reveal-delay", String(index * 90));
        }
      });
    }
  }

  var revealNodes = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));

  if (!revealNodes.length) {
    return;
  }

  function showImmediately() {
    revealNodes.forEach(function (node) {
      node.classList.add("is-visible");
    });
  }

  if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
    showImmediately();
    return;
  }

  var groupedDelays = new WeakMap();

  document.querySelectorAll("[data-reveal-group]").forEach(function (group) {
    var items = group.querySelectorAll('[data-reveal="item"]');

    items.forEach(function (item, index) {
      if (!item.hasAttribute("data-reveal-delay")) {
        groupedDelays.set(item, index * 90);
      }
    });
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) {
        return;
      }

      var node = entry.target;
      var explicitDelay = node.getAttribute("data-reveal-delay");
      var delay = explicitDelay !== null ? parseInt(explicitDelay, 10) : groupedDelays.get(node);

      if (!Number.isNaN(delay) && delay > 0) {
        node.style.transitionDelay = delay + "ms";
      }

      node.classList.add("is-visible");
      observer.unobserve(node);
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -10% 0px"
  });

  revealNodes.forEach(function (node) {
    observer.observe(node);
  });
}());
