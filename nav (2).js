// nav.js: injects the shared site navigation and marks the active link.
//
// How to use on a page:
//   1. Put  <div id="site-nav"></div>  where the nav should sit.
//   2. Load this file near the end of the page, with the right path:
//        root pages:      <script src="nav.js"></script>
//        pages in /for/:  <script src="../nav.js"></script>
// If the placeholder is missing the script does nothing, so half-migrated
// pages will not break.

(function () {
  var mount = document.getElementById('site-nav');
  if (!mount) return;

  // Work out how deep this page sits, so links resolve from any folder.
  var dir = location.pathname.substring(0, location.pathname.lastIndexOf('/') + 1);
  var depth = (dir.match(/\//g) || []).length - 1;   //  "/" => 0 ,  "/for/" => 1
  var p = depth > 0 ? Array(depth + 1).join('../') : '';

  var links = [
    { href: 'index.html',         label: 'Home' },
    { href: 'index.html#about',   label: 'About' },
    { href: 'index.html#pricing', label: 'The Service' },
    { href: 'work.html',          label: 'The Work' },
    { href: 'index.html#contact', label: 'Contact' }
  ];

  var current = location.pathname.split('/').pop();
  if (!current) current = 'index.html';

  var items = links.map(function (l) {
    var file = l.href.split('#')[0];
    var active = (file === current) ? ' class="active"' : '';
    return '<li><a href="' + p + l.href + '"' + active + '>' + l.label + '</a></li>';
  }).join('');

  mount.outerHTML =
    '<nav>' +
      '<a href="' + p + 'index.html" class="logo">Marketing for my Mates<span>.com</span></a>' +
      '<ul>' + items + '</ul>' +
      '<a href="' + p + 'index.html#contact" class="nav-cta">Book a Free Chat</a>' +
    '</nav>';
})();
