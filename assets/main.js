// Aparición progresiva del contenido al hacer scroll.
// Clave: el contenido es visible por defecto. Solo se oculta si ESTE archivo
// llega a correr (añade .reveal-init). Así, si el JS falla o no carga, la
// página nunca queda en blanco. Además usa scroll (universal) en vez de
// depender solo de IntersectionObserver, y tiene una red de seguridad final.
(function () {
  var els = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if (!els.length) return;

  // A partir de aquí sí ocultamos, porque sabemos que el JS corre.
  els.forEach(function (el) { el.classList.add('reveal-init'); });

  var pending = els.slice();

  function reveal(el) {
    el.classList.add('on');
    var i = pending.indexOf(el);
    if (i > -1) pending.splice(i, 1);
  }

  function sweep() {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    for (var i = pending.length - 1; i >= 0; i--) {
      if (pending[i].getBoundingClientRect().top < vh - 20) reveal(pending[i]);
    }
  }

  sweep(); // muestra de inmediato lo que ya está en pantalla

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { sweep(); ticking = false; });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  window.addEventListener('load', sweep);

  // Red de seguridad: pase lo que pase, todo queda visible en 3 s.
  setTimeout(function () { els.forEach(reveal); }, 3000);
})();
