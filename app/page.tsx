const sections = [
  {
    eyebrow: 'Signal',
    title: 'A navigation bar that shifts with context.',
    copy:
      'The header stays fixed across the app, gains contrast when you scroll, and highlights whichever item you hover over.',
  },
  {
    eyebrow: 'Motion',
    title: 'Small interactions, clear feedback.',
    copy:
      'The menu uses lightweight transitions so the state change feels deliberate without getting noisy.',
  },
  {
    eyebrow: 'Coverage',
    title: 'Visible on every page.',
    copy:
      'The nav is wired into the root layout, so it remains present whether you are on the home page, about page, or contact page.',
  },
];

export default function HomePage() {
  return (
    <div className="page-shell">
      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="kicker">Fixed navigation demo</span>
          <h1>Interactive navigation with scroll and hover state.</h1>
          <p>
            This starter shows a global menu that changes appearance once the page is scrolled and
            reacts to hover with a soft, premium feel.
          </p>
          <div className="hero-actions">
            <a href="#details" className="primary-btn">
              See the sections
            </a>
            <a href="/about" className="secondary-btn">
              Open another page
            </a>
          </div>
        </div>
        <div className="hero-card" aria-hidden="true">
          <div className="hero-card-top" />
          <div className="hero-card-body">
            <div className="dot-row">
              <span />
              <span />
              <span />
            </div>
            <div className="mini-lines">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </section>

      <section className="content-grid" id="details">
        {sections.map((section) => (
          <article className="info-card" key={section.title}>
            <span className="kicker">{section.eyebrow}</span>
            <h2>{section.title}</h2>
            <p>{section.copy}</p>
          </article>
        ))}
      </section>

      <section className="cta-band">
        <div>
          <span className="kicker">Try it</span>
          <h2>Scroll the page and hover any menu item.</h2>
        </div>
        <a href="/contact" className="primary-btn">
          Contact
        </a>
      </section>
    </div>
  );
}
