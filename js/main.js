/* =========================================================
   rebture — main.js
   1) Mobiles Menü (Hamburger)
   2) Scroll-Reveal-Animation im Hero (Logo -> Kletterseile)
   3) Fade-in für Inhalte beim Scrollen
   4) Zeigt Platzhalter-Grafiken, solange echte Bilder fehlen
   ========================================================= */

(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---------- 1) Mobiles Menü ---------- */
  var toggle = document.querySelector(".nav__toggle");
  var list = document.querySelector(".nav__list");
  if (toggle && list) {
    toggle.addEventListener("click", function () {
      var isOpen = list.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  /* ---------- 2) Hero Scroll-Reveal ---------- */
  // Sequence, as three distinct beats instead of one continuous blend:
  // (1) the solid white logo crossfades into the same rope texture
  // masked into its own silhouette, so the white part visibly "becomes"
  // rope; (2) a hold — the rope-filled logo sits still on the black
  // background for a beat while scrolling continues, nothing else moves;
  // (3) only then does the full-screen background fade in around it and
  // the logo shape disappears, leaving just the plain rope texture. Since
  // the masked layer and the full background show the identical image at
  // the identical position, there is no visible seam once phase 3 catches
  // up — the logo silhouette simply dissolves into the picture.
  var hero = document.querySelector(".hero");
  var heroLogo = document.querySelector(".hero__logo-wrap");
  var heroRopesInLogo = document.querySelector(".hero__ropes-in-logo");
  var heroRopes = document.querySelector(".hero__ropes");

  if (hero && heroLogo && heroRopesInLogo && heroRopes) {
    if (prefersReducedMotion) {
      // Statischer Endzustand ohne Animation
      heroLogo.style.opacity = "0";
      heroRopesInLogo.style.opacity = "0.9";
      heroRopes.style.opacity = "0.9";
      heroRopes.style.transform = "scale(1)";
    } else {
      var ticking = false;

      var updateHero = function () {
        var rect = hero.getBoundingClientRect();
        var heroHeight = hero.offsetHeight - window.innerHeight;
        if (heroHeight <= 0) heroHeight = 1;

        // progress: 0 = oben (Logo sichtbar), 1 = Hero komplett durchgescrollt
        var progress = -rect.top / heroHeight;
        progress = Math.min(Math.max(progress, 0), 1);

        // Phase 1 (progress 0 -> 0.28): weißes Logo verblasst, während an
        // exakt derselben Stelle die seilgefüllte Version einblendet — aber
        // nur bis 82% Deckkraft, nicht ganz voll. Dadurch bleibt die Textur
        // im Logo leicht transluzent/dunkler als das spätere Vollbild, was
        // die Logoform besser vom Hintergrund abhebt ("poppen" lässt).
        var LOGO_FILL_OPACITY = 0.82;
        var crossfade = Math.min(progress / 0.28, 1);
        heroLogo.style.opacity = String(1 - crossfade);
        heroRopesInLogo.style.opacity = String(crossfade * LOGO_FILL_OPACITY);

        // Phase 2 (progress 0.28 -> 0.55): bewusste Pause — das seilgefüllte
        // Logo bleibt einfach stehen (bei 82%), schwarzer Hintergrund
        // drumherum bleibt schwarz, während weitergescrollt wird.

        // Phase 3 (progress 0.55 -> 1): erst jetzt blendet der volle
        // Hintergrund rund um die Logo-Form ein und zoomt leicht rein, bis
        // die Form komplett im Bild verschwindet. Parallel dazu steigt auch
        // die Logo-Textur von 82% weiter an — beide laufen aber am Ende nur
        // bis 90% Deckkraft, nicht bis 100%, damit das Bild nie ganz "flach"
        // wirkt.
        var FINAL_OPACITY = 0.9;
        var ropesProgress = Math.min(Math.max((progress - 0.55) / 0.45, 0), 1);
        var ropesOpacity = ropesProgress * FINAL_OPACITY;
        var ropesScale = 1.08 - ropesProgress * 0.08;
        heroRopes.style.opacity = String(ropesOpacity);
        heroRopes.style.transform = "scale(" + ropesScale + ")";
        heroRopesInLogo.style.opacity = String(
          LOGO_FILL_OPACITY + ropesProgress * (FINAL_OPACITY - LOGO_FILL_OPACITY)
        );

        ticking = false;
      };

      var onScroll = function () {
        if (!ticking) {
          window.requestAnimationFrame(updateHero);
          ticking = true;
        }
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      updateHero();
    }
  }

  /* ---------- 3) Fade-in beim Scrollen für Inhalte ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ---------- 4) Platzhalter-Fallback für fehlende Bilder ---------- */
  // Bilder mit class="optional-img" verschwinden elegant (statt kaputtem
  // Icon), solange die echten Dateien noch nicht in /images liegen.
  document.querySelectorAll("img.optional-img").forEach(function (img) {
    img.addEventListener("error", function () {
      var figure = img.closest(".gallery-figure") || img.closest(".team-figure");
      if (figure) figure.classList.add("is-broken");
      else img.style.display = "none";
    });
  });

  // Hero-Logo & Hero-Hintergrund: wenn die echten Dateien fehlen,
  // Text-Logo bzw. Muster-Hintergrund als Fallback zeigen.
  var heroLogoImg = document.querySelector(".hero__logo-img");
  var heroLogoFallback = document.querySelector(".hero__logo-fallback");
  if (heroLogoImg && heroLogoFallback) {
    heroLogoImg.addEventListener("error", function () {
      heroLogoImg.style.display = "none";
      heroLogoFallback.style.display = "block";
    });
  }
  if (heroRopes) {
    var testImg = new Image();
    testImg.onerror = function () {
      heroRopes.classList.add("hero__ropes--fallback");
      if (heroRopesInLogo) heroRopesInLogo.classList.add("hero__ropes--fallback");
    };
    testImg.src = "/images/ropes-bg.jpg";
  }
})();
