/**
 * TechAcademy - Global Theme Initializer
 * Runs synchronously in <head> before page paint to prevent any theme flash.
 */
(function () {
  try {
    var savedTheme = localStorage.getItem('techacademy-theme') || 'techacademy';
    document.documentElement.dataset.theme = savedTheme;
  } catch (e) {
    document.documentElement.dataset.theme = 'techacademy';
  }
})();
