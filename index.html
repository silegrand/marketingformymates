// footer.js: injects the shared site footer on every page.
//
// A proper structured footer, modelled on the Fyrfly Systems layout:
//   - a brand block (wordmark, one-line description, contact, location)
//   - grouped link columns by category (Trades, Advice, Tools, Navigate)
//   - a credentials row (the genuine trust signals used across the site)
//   - a bottom bar (copyright and contact)
//
// Slate throughout, to match the site theme.
//
// How to use on a page:
//   1. Put  <div id="site-footer"></div>  where the footer should sit.
//   2. Load this file near the end of the page, with the right path:
//        root pages:      <script src="footer.js"></script>
//        pages in /for/:  <script src="../footer.js"></script>
//
// To add a new local page, add one line to the relevant list below, then add
// the same page to sitemap.xml (that is what actually gets it indexed).
// Paths are written from the site root; the script adjusts them per folder.

(function () {
  var mount = document.getElementById('site-footer');
  if (!mount) return;

  // Work out how deep this page sits, so links resolve from any folder.
  var dir = location.pathname.substring(0, location.pathname.lastIndexOf('/') + 1);
  var depth = (dir.match(/\//g) || []).length - 1;   //  "/" => 0 ,  "/for/" => 1
  var p = depth > 0 ? Array(depth + 1).join('../') : '';

  // ---- SINGLE SOURCE OF TRUTH FOR SITE LINKS ---------------------------
  var TRADES = [
    { href: 'for/builders-kent.html',        label: 'Builders in Kent' },
    { href: 'for/electricians-kent.html',    label: 'Electricians in Kent' },
    { href: 'for/plumbers-kent.html',        label: 'Plumbers &amp; heating in Kent' },
    { href: 'for/telecoms-kent.html',        label: 'Telecoms &amp; cabling in Kent' },
    { href: 'for/cctv-installers-kent.html', label: 'CCTV installers in Kent' }
  ];
  var ADVICE = [
    { href: 'advice/why-installers-lose-contracts.html', label: 'Why installers lose contracts' },
    { href: 'advice/what-a-trades-website-needs.html',   label: 'What a trades website needs' },
    { href: 'advice/retainer-vs-agency-build.html',      label: 'Retainer vs agency build' },
    { href: 'advice.html',                               label: 'All advice' }
  ];
  var TOOLS = [
    { href: 'audit-tool.html',          label: 'Free digital audit' },
    { href: 'roi-calculator.html',      label: 'ROI calculator' },
    { href: 'qualifier-quiz.html',      label: 'Is this right for you?' },
    { href: 'onboarding-timeline.html', label: 'What happens after you book' }
  ];
  var NAVIGATE = [
    { href: 'index.html',         label: 'Home' },
    { href: 'index.html#about',   label: 'About' },
    { href: 'index.html#pricing', label: 'The Service' },
    { href: 'work.html',          label: 'The Work' },
    { href: 'index.html#contact', label: 'Contact' }
  ];
  var CREDENTIALS = [
    'MCIM Chartered Marketer',
    '3 Granted Patents',
    'Technology Co-Founder',
    'Faversham, Kent',
    'Local B2B trades'
  ];
  // ----------------------------------------------------------------------

  var here = location.pathname.replace(/^\//, '');   // e.g. "for/builders-kent.html"
  if (here === '' || here.charAt(here.length - 1) === '/') here += 'index.html';

  function col(title, items) {
    var links = items.map(function (it) {
      var file = it.href.split('#')[0];
      var isHash = it.href.indexOf('#') !== -1;
      var current = (!isHash && file === here) ? ' class="mfm-current"' : '';
      return '<a href="' + p + it.href + '"' + current + '>' + it.label + '</a>';
    }).join('');
    return '<div class="mfm-col"><h3>' + title + '</h3><div class="mfm-links">' + links + '</div></div>';
  }

  var pills = CREDENTIALS.map(function (c) {
    return '<span class="mfm-pill">' + c + '</span>';
  }).join('');

  // Scoped styles, injected once. Everything is namespaced under .mfm-footer so
  // it renders identically on any page, whatever that page's own CSS contains.
  if (!document.getElementById('mfm-footer-css')) {
    var css = document.createElement('style');
    css.id = 'mfm-footer-css';
    css.textContent = [
      // Hard reset: stop any bare element rule on the host page (its sticky
      // nav{}, footer{}, a{}, p{}, span{} etc.) leaking box, background or
      // positioning into the footer. This is what caused the white boxes.
      '.mfm-footer,.mfm-footer *{box-sizing:border-box;}',
      '.mfm-footer *{margin:0;padding:0;border:0;background:transparent;',
        'position:static;box-shadow:none;backdrop-filter:none;float:none;color:inherit;}',
      '.mfm-footer{display:block;margin:0;padding:0;position:static;',
        'background:#0f172a;color:#94a3b8;',
        'font-family:var(--font-head,"Cabinet Grotesk",system-ui,sans-serif);',
        'border-top:1px solid rgba(148,163,184,0.14);}',
      '.mfm-footer .mfm-inner{max-width:1200px;margin:0 auto;padding:4rem 4rem 0;}',
      '.mfm-footer .mfm-cols{display:grid;',
        'grid-template-columns:1.6fr 1fr 1fr 1fr 1fr;gap:2.5rem 2rem;',
        'padding-bottom:3rem;border-bottom:1px solid rgba(148,163,184,0.12);}',
      '.mfm-footer .mfm-brand .mfm-word{font-size:1.15rem;font-weight:800;',
        'color:#f8fafc;letter-spacing:-0.01em;margin:0 0 0.75rem;}',
      '.mfm-footer .mfm-brand .mfm-word span{color:#94a3b8;font-weight:500;}',
      '.mfm-footer .mfm-brand p{font-size:0.82rem;line-height:1.65;',
        'color:#94a3b8;margin:0 0 1.1rem;max-width:30ch;}',
      '.mfm-footer .mfm-brand a.mfm-email{font-family:var(--font-mono,"JetBrains Mono",monospace);',
        'font-size:0.78rem;color:#cbd5e1;text-decoration:none;',
        'border-bottom:1px solid rgba(203,213,225,0.3);padding-bottom:1px;transition:color 0.18s,border-color 0.18s;}',
      '.mfm-footer .mfm-brand a.mfm-email:hover{color:#f8fafc;border-color:#f8fafc;}',
      '.mfm-footer .mfm-brand .mfm-loc{display:block;margin-top:0.9rem;',
        'font-family:var(--font-mono,"JetBrains Mono",monospace);font-size:0.7rem;',
        'letter-spacing:0.04em;color:#8b98ac;}',
      '.mfm-footer .mfm-col h3{font-family:var(--font-mono,"JetBrains Mono",monospace);',
        'font-size:0.68rem;font-weight:700;letter-spacing:0.11em;text-transform:uppercase;',
        'color:#e2e8f0;margin:0 0 1.1rem;}',
      '.mfm-footer .mfm-col .mfm-links{display:flex;flex-direction:column;gap:0.6rem;}',
      '.mfm-footer .mfm-col .mfm-links a{font-size:0.82rem;line-height:1.35;color:#94a3b8;',
        'text-decoration:none;transition:color 0.16s;}',
      '.mfm-footer .mfm-col .mfm-links a:hover{color:#f1f5f9;}',
      '.mfm-footer .mfm-col .mfm-links a.mfm-current{color:#f1f5f9;font-weight:700;}',
      '.mfm-footer .mfm-creds{display:flex;flex-wrap:wrap;gap:0.5rem 0.6rem;',
        'padding:1.75rem 0;border-bottom:1px solid rgba(148,163,184,0.12);}',
      '.mfm-footer .mfm-pill{font-family:var(--font-mono,"JetBrains Mono",monospace);',
        'font-size:0.68rem;letter-spacing:0.03em;color:#cbd5e1;',
        'border:1px solid rgba(148,163,184,0.28);border-radius:2px;padding:0.32rem 0.7rem;}',
      '.mfm-footer .mfm-bottom{display:flex;flex-wrap:wrap;justify-content:space-between;',
        'align-items:center;gap:0.75rem 1.5rem;padding:1.5rem 0 2.25rem;',
        'font-family:var(--font-mono,"JetBrains Mono",monospace);font-size:0.7rem;color:#8b98ac;}',
      '.mfm-footer .mfm-bottom a{color:#cbd5e1;text-decoration:underline;text-underline-offset:2px;transition:color 0.16s;}',
      '.mfm-footer .mfm-bottom a:hover{color:#ffffff;}',
      '@media(max-width:900px){',
        '.mfm-footer .mfm-inner{padding:3rem 1.5rem 0;}',
        '.mfm-footer .mfm-cols{grid-template-columns:1fr 1fr;gap:2rem 1.5rem;}',
        '.mfm-footer .mfm-brand{grid-column:1/-1;}}',
      '@media(max-width:520px){',
        '.mfm-footer .mfm-cols{grid-template-columns:1fr;}',
        '.mfm-footer .mfm-bottom{flex-direction:column;align-items:flex-start;}}'
    ].join('');
    document.head.appendChild(css);
  }

  var year = new Date().getFullYear();

  mount.outerHTML =
    '<footer class="mfm-footer"><div class="mfm-inner">' +
      '<div class="mfm-cols">' +
        '<div class="mfm-brand">' +
          '<p class="mfm-word">Marketing for my Mates<span>.com</span></p>' +
          '<p>Honest, month-to-month marketing for local B2B trades. ' +
             'No contracts, no jargon, no lock-in. Just the work that wins contracts.</p>' +
          '<a class="mfm-email" href="mailto:simon@marketingformymates.com">simon@marketingformymates.com</a>' +
          '<span class="mfm-loc">Faversham, Kent &middot; Serving trades across Kent</span>' +
        '</div>' +
        col('Trades I cover', TRADES) +
        col('Free advice', ADVICE) +
        col('Free tools', TOOLS) +
        col('Navigate', NAVIGATE) +
      '</div>' +
      '<div class="mfm-creds">' + pills + '</div>' +
      '<div class="mfm-bottom">' +
        '<span>&copy; ' + year + ' Marketing for my Mates &middot; marketingformymates.com</span>' +
        '<span>Built for local B2B trades &middot; ' +
          '<a href="mailto:simon@marketingformymates.com">Get in touch</a></span>' +
      '</div>' +
    '</div></footer>';
})();
