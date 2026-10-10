const points = [
  ["Passionate Community Leaders", "Our organizers build an inclusive environment where developers can connect, share knowledge, and grow together."],
  ["Empowering Developers", "We host meetups and codelabs to help developers stay current with modern tools and best practices."],
];
export default function Team() {
  return (
    <section id="team" className="section">
      <div className="team">
        <div className="team-copy">
          <h2>Meet the Google Developer Group Team</h2>
          <p>Google Developer Groups (GDG) are open and volunteer-run communities for developers interested in Google technologies. Our team focuses on learning, networking, and collaboration through events and hands-on sessions.</p>
          <ul>
            {points.map(([t, d]) => (
              <li key={t}><span className="check" aria-hidden>✓</span><div><b>{t}</b><p>{d}</p></div></li>
            ))}
          </ul>
        </div>
        {/* Drop your team photo at public/team.jpg */}
        <div className="team-photo" role="img" aria-label="GDG RBU team photo" />
      </div>
    </section>
  );
}
