import { ArrowDown, ArrowUpRight, ExternalLink, FileText, Landmark, Search, ShieldCheck } from "lucide-react";

const appUrl = "https://civic-ledger.vercel.app";
const betaUrl = "https://testflight.apple.com/join/4MprCkG8";

function Wordmark() {
  return <a className="wordmark" href="#top" aria-label="Civic Ledger home"><img src="/civic-logo.png" alt=""/><span>Civic Ledger</span></a>;
}

export default function Home() {
  return <main id="top">
    <header className="topbar">
      <Wordmark />
      <nav><a href="#approach">About</a><a href="#records">The record</a></nav>
      <a className="nav-link" href={betaUrl} target="_blank" rel="noreferrer">Try the beta <ArrowUpRight size={14} /></a>
    </header>

    <section className="hero section-centered">
      <p className="eyebrow">A CLEARER VIEW OF PUBLIC LIFE</p>
      <h1>Follow the public record.</h1>
      <p className="subhead">See what officials do, where the evidence comes from, and how one action connects to another.</p>
      <div className="link-row"><a className="blue-link" href={betaUrl} target="_blank" rel="noreferrer">Join the TestFlight beta <ArrowUpRight size={16} /></a><a className="blue-link" href="#records">Explore the record <ArrowDown size={15} /></a></div>
      <div className="ledger-stage" aria-label="Civic Ledger record illustration">
        <div className="ledger-halo" />
        <div className="ledger-sheet">
          <div className="sheet-top"><span><img src="/civic-logo.png" alt=""/> CIVIC LEDGER</span><span>PUBLIC RECORD · 2026</span></div>
          <div className="sheet-head"><div className="sheet-label">OFFICIAL ACTION / SOURCE LINKED</div><h2>A decision is only<br />the beginning.</h2><p>Open the record. See the source. Follow the people and actions connected to it.</p></div>
          <div className="sheet-items">
            <div className="sheet-item"><span className="sheet-icon"><Landmark size={18} /></span><div><b>Legislation & votes</b><small>Proposals, executive actions, recorded choices</small></div><ArrowUpRight size={15} /></div>
            <div className="sheet-item"><span className="sheet-icon"><Search size={18} /></span><div><b>Campaign finance</b><small>Reported figures, filings, and disclosures</small></div><ArrowUpRight size={15} /></div>
            <div className="sheet-item"><span className="sheet-icon"><FileText size={18} /></span><div><b>Endorsements & positions</b><small>Attributed statements, kept in context</small></div><ArrowUpRight size={15} /></div>
          </div>
          <div className="sheet-foot"><span>RECORDS WITH THEIR SOURCES</span><span>01 — 03</span></div>
        </div>
        <div className="stage-caption">Built to follow the trail.</div>
      </div>
    </section>

    <section className="split-feature" id="approach">
      <div className="feature-copy"><p className="eyebrow">WHY CIVIC LEDGER</p><h2>Less noise.<br /><em>More context.</em></h2><p>Public information lives across official sites, filings, and government records. Civic Ledger brings documented actions together around the people they concern, with a path back to the original source.</p><a className="blue-link" href={appUrl} target="_blank" rel="noreferrer">See Civic Ledger <ArrowUpRight size={16} /></a></div>
      <div className="feature-visual" aria-label="Connected public record documents"><div className="connection connection-a"/><div className="connection connection-b"/><div className="mini-record mini-one"><span>01 · ACTION</span><b>Roll call</b><i/><i/><i/></div><div className="mini-record mini-two"><span>02 · SOURCE</span><b>Official record</b><i/><i/><i/></div><div className="mini-record mini-three"><span>03 · CONTEXT</span><b>Related filing</b><i/><i/><i/></div><div className="connect-node">↗</div></div>
    </section>

    <section className="records section-centered" id="records">
      <p className="eyebrow">FOLLOW A RECORD WHERE IT LEADS</p>
      <h2>Public actions.<br /><em>In context.</em></h2>
      <p className="subhead">Start with an official act, a filing, or a public statement. Follow the record without losing its source or its scope.</p>
      <div className="record-categories">
        <article><span className="category-icon"><Landmark size={20}/></span><h3>Actions</h3><p>Legislation, executive actions, and recorded votes, shown as separate events.</p></article>
        <article><span className="category-icon"><Search size={20}/></span><h3>Funding</h3><p>Reported campaign finances and disclosures, with filing dates and source links.</p></article>
        <article><span className="category-icon"><FileText size={20}/></span><h3>Statements</h3><p>Endorsements in both directions and public positions, attributed to their source.</p></article>
      </div>
      <div className="coverage"><ShieldCheck size={17}/><span>Coverage is growing. Each record shows its available source and scope.</span></div>
    </section>

    <section className="closing section-centered">
      <p className="eyebrow">START WITH THE SOURCE</p>
      <h2>Look closer.</h2>
      <p className="subhead">The public record, connected.</p>
      <a className="button-primary" href={betaUrl} target="_blank" rel="noreferrer">Join the TestFlight beta <ArrowUpRight size={16}/></a>
      <div className="closing-record" aria-hidden="true"><span className="closing-column"><i/><i/><i/><i/></span><span className="closing-column"><i/><i/><i/></span><span className="closing-column"><i/><i/><i/><i/><i/></span></div>
    </section>

    <footer><Wordmark/><span>Public information, connected to its source.</span><a href={appUrl} target="_blank" rel="noreferrer">Open the app <ExternalLink size={13}/></a><small>© {new Date().getFullYear()} Civic Ledger</small></footer>
  </main>;
}
