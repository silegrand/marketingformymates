// nav.js — shared navigation active state handler
// Drop this script tag at the bottom of any page: <script src="nav.js"></script>
(function () {
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav ul a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (!href) return;
    var page = href.split('/').pop().split('#')[0] || 'index.html';
    if (page === current) {
      a.classList.add('active');
      a.style.color = 'var(--amber)';
    }
  });
})();
