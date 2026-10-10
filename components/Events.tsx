export default function Events() {
  return (
    <section id="events" className="section">
      <h2 className="title">Upcoming Event</h2>
      <div className="events">
        <article className="event-card">
          <span className="chip">UPCOMING</span>
          <div className="event-body">
            <h3>GDG ORIENTATION</h3>
            <p>Google Developer Groups (GDG) – Student Chapter is a community of students passionate about technology, innovation, and learning. We bring students together to learn, build, and grow through technical workshops, hackathons, projects, and sessions.</p>
            <button className="round" aria-label="Open event details">★</button>
          </div>
        </article>
        <aside className="event-side">
          <h3>New Event</h3>
          <small>DATE &amp; TIME</small>
          <p><b>Oct 7, 2026<br />3:00 PM</b></p>
          <a href="#faq" className="btn dark">Register Now</a>
        </aside>
      </div>
    </section>
  );
}
