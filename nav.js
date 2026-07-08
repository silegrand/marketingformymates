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
    { href: 'advice.html',        label: 'Advice' },
    { href: 'index.html#contact', label: 'Contact' }
  ];

  var current = location.pathname.split('/').pop();
  if (!current) current = 'index.html';

  var items = links.map(function (l) {
    var hasHash = l.href.indexOf('#') !== -1;
    var file = l.href.split('#')[0];
    // Only the current page's own link is active. Anchor links into a page
    // (e.g. index.html#about) never count, so the homepage does not light up
    // Home, About, The Service and Contact all at once.
    var active = (!hasHash && file === current) ? ' class="active"' : '';
    return '<li><a href="' + p + l.href + '"' + active + '>' + l.label + '</a></li>';
  }).join('');

  mount.outerHTML =
    '<nav>' +
      '<a href="' + p + 'index.html" class="logo">Marketing for my Mates<span>.com</span></a>' +
      '<ul>' + items + '</ul>' +
      '<a href="' + p + 'index.html#contact" class="nav-cta">Book a Free Chat</a>' +
    '</nav>';
})();
