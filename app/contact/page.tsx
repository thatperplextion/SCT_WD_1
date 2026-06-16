export default function ContactPage() {
  return (
    <div className="page-shell narrow-page">
      <section className="simple-hero">
        <span className="kicker">Contact</span>
        <h1>Use this page to confirm the nav is still present.</h1>
        <p>
          The fixed header remains visible here as well, with the same scroll-aware styling and
          responsive mobile menu.
        </p>
      </section>

      <section className="stacked-panels">
        <article className="info-card">
          <h2>Email</h2>
          <p>hello@example.com</p>
        </article>
        <article className="info-card">
          <h2>Location</h2>
          <p>Remote-first, fixed-nav friendly.</p>
        </article>
      </section>
    </div>
  );
}
