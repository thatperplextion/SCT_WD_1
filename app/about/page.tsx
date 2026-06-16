export default function AboutPage() {
  return (
    <div className="page-shell narrow-page">
      <section className="simple-hero">
        <span className="kicker">About</span>
        <h1>Global navigation across multiple pages.</h1>
        <p>
          This route exists to prove the menu lives in the shared layout, not just on the home
          screen.
        </p>
      </section>

      <section className="stacked-panels">
        <article className="info-card">
          <h2>Fixed placement</h2>
          <p>The header stays pinned to the top of the viewport while content scrolls beneath it.</p>
        </article>
        <article className="info-card">
          <h2>Hover feedback</h2>
          <p>Each menu item gets a distinct hover treatment so the target is obvious and responsive.</p>
        </article>
      </section>
    </div>
  );
}
