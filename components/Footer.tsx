import { Logo } from "./Navbar";
const unused = ["#ea4335","#4285f4","#fbbc04","#34a853","#ea4335","#fbbc04","#4285f4","#34a853"];
export default function Footer() {
  return (
    <footer>
      <div className="foot-card">
        <Logo size={44} />
        <h3>Google Developer Groups</h3>
        <small>On Campus • Ramdeobaba University</small>
        <hr />
        <div className="foot-grid">
          <div>
            <p className="box blue"><b>📍 Ramdeobaba University<br />Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur-440013</b></p>
            <p className="box yellow"><b>✉ gdsc@rknec.edu</b></p>
          </div>
          <div className="box purple follow"><b>Follow Us:</b>
            <div className="row">
              {[["◎", "#f87171"], ["in", "#60a5fa"], ["𝕏", "#4ade80"]].map(([l, c]) => <a key={l} href="#" className="soc" style={{ background: c }} aria-label={l}>{l}</a>)}
            </div>
          </div>
        </div>
      </div>
      <div className="shapes" aria-hidden />
    </footer>
  );
}
