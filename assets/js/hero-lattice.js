/*
 * Hero background: a 2D carbon-like hexagonal lattice whose atoms vibrate
 * thermally. Moving the cursor injects "heat" locally; heat diffuses to
 * neighbours and decays, so you can watch a small heat-transport process.
 */
(function () {
  var canvas = document.getElementById("hero-lattice");
  if (!canvas || !canvas.getContext) {
    return;
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var ctx = canvas.getContext("2d");
  var SPACING = 34;
  var DIFFUSION = 0.08;
  var DECAY = 0.985;
  var HEAT_RADIUS = 90;
  var BASE_AMPLITUDE = 0.8;
  var HOT_AMPLITUDE = 5;

  var atoms = [];
  var bonds = [];
  var dpr = 1;
  var width = 0;
  var height = 0;
  var pointer = { x: -9999, y: -9999, active: false };
  var running = true;

  function buildLattice() {
    atoms = [];
    bonds = [];
    var rowHeight = SPACING * Math.sqrt(3) / 2;
    var cols = Math.ceil(width / SPACING) + 2;
    var rows = Math.ceil(height / rowHeight) + 2;

    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        // Remove one of the three triangular sublattices to get a honeycomb (graphene-like) grid.
        var sub = (((c - Math.floor(r / 2) - r) % 3) + 3) % 3;
        if (sub === 0) {
          continue;
        }
        var x = c * SPACING + (r % 2) * SPACING / 2 - SPACING;
        var y = r * rowHeight - rowHeight;
        atoms.push({ x0: x, y0: y, x: x, y: y, heat: 0, next: 0, phase: Math.random() * Math.PI * 2, neighbours: [] });
      }
    }

    var maxBond = SPACING * 1.05;
    for (var i = 0; i < atoms.length; i++) {
      for (var j = i + 1; j < atoms.length; j++) {
        var dy = atoms[j].y0 - atoms[i].y0;
        if (dy > maxBond) {
          break;
        }
        if (Math.hypot(atoms[j].x0 - atoms[i].x0, dy) < maxBond) {
          bonds.push([i, j]);
          atoms[i].neighbours.push(j);
          atoms[j].neighbours.push(i);
        }
      }
    }
  }

  function resize() {
    var rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildLattice();
  }

  function isDark() {
    return document.documentElement.classList.contains("dark");
  }

  // Cold atoms are blue, hot atoms shift towards warm orange.
  function heatColor(heat, alpha) {
    var t = Math.min(heat, 1);
    var cold = isDark() ? [173, 198, 255] : [0, 88, 188];
    var hot = [255, 122, 69];
    var r = Math.round(cold[0] + (hot[0] - cold[0]) * t);
    var g = Math.round(cold[1] + (hot[1] - cold[1]) * t);
    var b = Math.round(cold[2] + (hot[2] - cold[2]) * t);
    return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
  }

  function step(time) {
    var i;
    if (pointer.active) {
      for (i = 0; i < atoms.length; i++) {
        var d = Math.hypot(atoms[i].x0 - pointer.x, atoms[i].y0 - pointer.y);
        if (d < HEAT_RADIUS) {
          atoms[i].heat = Math.min(1.4, atoms[i].heat + 0.12 * (1 - d / HEAT_RADIUS));
        }
      }
    }

    for (i = 0; i < atoms.length; i++) {
      var atom = atoms[i];
      var sum = 0;
      for (var n = 0; n < atom.neighbours.length; n++) {
        sum += atoms[atom.neighbours[n]].heat - atom.heat;
      }
      atom.next = (atom.heat + DIFFUSION * sum) * DECAY;
    }

    var t = time / 1000;
    for (i = 0; i < atoms.length; i++) {
      var a = atoms[i];
      a.heat = a.next;
      var amp = BASE_AMPLITUDE + HOT_AMPLITUDE * Math.min(a.heat, 1);
      a.x = a.x0 + Math.cos(t * 3.1 + a.phase) * amp;
      a.y = a.y0 + Math.sin(t * 3.7 + a.phase * 1.3) * amp;
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 1;
    for (var i = 0; i < bonds.length; i++) {
      var a = atoms[bonds[i][0]];
      var b = atoms[bonds[i][1]];
      var heat = (a.heat + b.heat) / 2;
      ctx.strokeStyle = heatColor(heat, 0.08 + Math.min(heat, 1) * 0.35);
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }
    for (var j = 0; j < atoms.length; j++) {
      var atom = atoms[j];
      var h = Math.min(atom.heat, 1);
      ctx.fillStyle = heatColor(h, 0.18 + h * 0.6);
      ctx.beginPath();
      ctx.arc(atom.x, atom.y, 1.8 + h * 1.6, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function loop(time) {
    if (!running) {
      return;
    }
    step(time);
    draw();
    window.requestAnimationFrame(loop);
  }

  var host = canvas.parentElement;
  host.addEventListener("pointermove", function (e) {
    var rect = canvas.getBoundingClientRect();
    pointer.x = e.clientX - rect.left;
    pointer.y = e.clientY - rect.top;
    pointer.active = true;
  });
  host.addEventListener("pointerleave", function () {
    pointer.active = false;
  });

  var resizeTimer;
  window.addEventListener("resize", function () {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(resize, 150);
  });

  resize();

  if (reduceMotion) {
    draw();
    return;
  }

  // Pause the simulation when the hero is off-screen to save battery.
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      var visible = entries[0].isIntersecting;
      if (visible && !running) {
        running = true;
        window.requestAnimationFrame(loop);
      } else if (!visible) {
        running = false;
      }
    }).observe(canvas);
  }

  window.requestAnimationFrame(loop);
}());
