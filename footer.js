// footer.js: injects the shared footer: the "areas and trades" index plus
// the branding row. One place to add a new local page, applied everywhere.
//
// How to use on a page:
//   1. Put  <div id="site-footer"></div>  where the footer should sit.
//   2. Load this file near the end of the page, with the right path:
//        root pages:      <script src="footer.js"></script>
//        pages in /for/:  <script src="../footer.js"></script>
//
// When you add a new local page, add one line to SITE_PAGES below. Paths are
// written from the site root; the script adjusts them for the current folder.
// Also add the new page to sitemap.xml, which is what actually guarantees
// Google discovers it (see note in the reply).

(function () {
  var mount = document.getElementById('site-footer');
  if (!mount) return;

  var dir = location.pathname.substring(0, location.pathname.lastIndexOf('/') + 1);
  var depth = (dir.match(/\//g) || []).length - 1;
  var p = depth > 0 ? Array(depth + 1).join('../') : '';

  // ---- SINGLE SOURCE OF TRUTH FOR LOCAL PAGES ---------------------------
  var SITE_PAGES = [
    { href: 'for/builders-kent.html',        label: 'Builders in Kent' },
    { href: 'for/electricians-kent.html',    label: 'Electricians in Kent' },
    { href: 'for/plumbers-kent.html',        label: 'Plumbers &amp; heating in Kent' },
    { href: 'for/telecoms-kent.html',        label: 'Telecoms &amp; cabling in Kent' },
    { href: 'for/cctv-installers-kent.html', label: 'CCTV installers in Kent' }
  ];
  // -----------------------------------------------------------------------

  var here = location.pathname.replace(/^\//, '');   // e.g. "for/builders-kent.html"

  var links = SITE_PAGES.map(function (pg) {
    var current = (here === pg.href) ? ' class="current"' : '';
    return '<a href="' + p + pg.href + '"' + current + '>' + pg.label + '</a>';
  }).join('');

  // Styles for the index block, injected once so the footer renders correctly
  // on any page, including the homepage, whatever that page's own CSS contains.
  if (!document.getElementById('site-footer-css')) {
    var css = document.createElement('style');
    css.id = 'site-footer-css';
    css.textContent =
      // Ink footer: one warm near-black anchor at the base of every page.
      // Amber is lifted slightly (#94a3b8) so it stays legible on dark.
      '.page-index{border-top:1px solid rgba(0,0,0,0.09);background:#1b1a16;padding:3.75rem 0;}' +
      '.page-index h2{font-size:1.15rem;margin-bottom:0.4rem;color:#f6f4ef;}' +
      '.page-index .idx-intro{font-size:0.85rem;color:#9c968c;max-width:640px;margin-bottom:1.75rem;line-height:1.7;}' +
      '.index-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:0.35rem 1.75rem;}' +
      '.index-grid a{font-family:var(--font-mono);font-size:0.73rem;color:#cbc6bd;text-decoration:none;padding:0.28rem 0;transition:color 0.18s;letter-spacing:0.02em;}' +
      '.index-grid a:hover{color:#94a3b8;}' +
      '.index-grid a.current{color:#94a3b8;font-weight:700;}' +
      'footer{background:#1b1a16;border-top:1px solid rgba(255,255,255,0.07);}' +
      '.footer-logo{color:#9c968c;}' +
      '.footer-logo strong{color:#94a3b8;}' +
      '.footer-right{color:#948f86;}' +
      '.footer-right a{color:#cbc6bd;text-decoration:none;}' +
      '.footer-right a:hover{color:#94a3b8;}';
    document.head.appendChild(css);
  }

  mount.outerHTML =
    '<div class="page-index">' +
      '<div class="container">' +
        '<h2>Areas and trades I cover</h2>' +
        '<p class="idx-intro">Each page below is a real local service page. Same plan, same honesty, tuned to the trade and the town.</p>' +
        '<div class="index-grid">' + links + '</div>' +
      '</div>' +
    '</div>' +
    '<footer>' +
      '<div class="footer-logo"><strong>Marketing for my Mates</strong> &middot; marketingformymates.com</div>' +
      '<div class="footer-right"><a href="mailto:simon@marketingformymates.com">simon@marketingformymates.com</a> &nbsp;&middot;&nbsp; Built for local B2B trades</div>' +
    '</footer>';
})();
