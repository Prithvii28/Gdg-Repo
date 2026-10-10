export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <h1>Google Developer Groups, RBU</h1>
        <p>Empowering students with cutting-edge tech skills, community, and resources for a future in technology</p>
        <div className="row">
          <a className="btn" href="#team">Learn more</a>
          <a className="btn" href="#faq">Profile</a>
        </div>
        <span className="tag">GDG • RBU</span>
      </div>
      <div className="hero-art" aria-hidden>
        <div className="blob b1" /><div className="blob b2" />
        <span className="search-bar">gdgr</span>
      </div>
    </section>
  );
}
