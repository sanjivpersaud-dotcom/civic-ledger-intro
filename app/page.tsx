import { ArrowDownRight, ArrowUpRight, ExternalLink, FileText, Landmark, Search, ShieldCheck } from "lucide-react";

const appUrl = "https://civic-ledger.vercel.app";
const betaUrl = "https://testflight.apple.com/join/4MprCkG8";

export default function Home() {
  return <main>
    <div className="grain" aria-hidden="true" />
    <header className="topbar">
      <a className="wordmark" href="#top" aria-label="Civic Ledger home"><span className="mark"><i /><i /><i /></span><span>CIVIC LEDGER</span></a>
      <nav><a href="#approach">Our approach</a><a href="#records">What you can follow</a></nav>
      <a className="nav-cta" href={appUrl} target="_blank" rel="noreferrer">Open the app <ExternalLink size={14} /></a>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><span className="live-dot" /> PUBLIC RECORD, MADE LEGIBLE</p>
        <h1>Follow what<br />public officials <em>do.</em></h1>
        <p className="intro">Civic Ledger brings public actions into view—votes, legislation, campaign finance, and the statements that shape a public record.</p>
        <div className="hero-actions"><a className="button-primary" href={betaUrl} target="_blank" rel="noreferrer">Join the TestFlight beta <ArrowUpRight size={17} /></a><a className="text-link" href="#approach">How it works <ArrowDownRight size={15} /></a></div>
        <div className="hero-note"><span className="rule" />Built from records you can open and check.</div>
      </div>
      <div className="hero-art" aria-label="Illustration of a public record ledger">
        <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
        <div className="record-card card-back"><span className="card-kicker">PUBLIC RECORD / 026</span><div className="ghost-lines"><i /><i /><i /></div><div className="back-stamp">CIVIC<br />ARCHIVE</div></div>
        <div className="record-card card-front">
          <div className="record-head"><span><Landmark size={14} /> THE RECORD</span><span className="record-date">2026</span></div>
          <div className="record-title">A public action<br />has a paper trail.</div>
          <div className="record-line"><span className="line-icon"><FileText size={14} /></span><div><b>Legislation & votes</b><small>Official action · source linked</small></div><span className="line-arrow">↗</span></div>
          <div className="record-line"><span className="line-icon gold"><Search size={14} /></span><div><b>Funding & disclosures</b><small>Reported figures · dated</small></div><span className="line-arrow">↗</span></div>
          <div className="record-line"><span className="line-icon green"><ArrowUpRight size={14} /></span><div><b>Endorsements & positions</b><small>Attributed statement · dated</small></div><span className="line-arrow">↗</span></div>
          <div className="card-foot"><span>OPEN SOURCES</span><span className="foot-dashes">— — — — —</span><span>CHECK THE RECORD</span></div>
        </div>
        <div className="annotation"><span className="annotation-dot" />Traceable, not inferred</div>
      </div>
      <div className="hero-index"><span>01</span><span className="index-line"/><span>PUBLIC LIFE, IN CONTEXT</span></div>
    </section>

    <section className="approach" id="approach">
      <div className="section-label"><span>THE IDEA</span><span>01 — 03</span></div>
      <div className="approach-grid"><h2>Not another<br />news cycle.</h2><div className="approach-copy"><p className="large-copy">A place to follow the <em>record</em> behind public life.</p><p>Policy debates move fast. The underlying records are scattered across agencies, filings, and official sites. Civic Ledger brings those threads together around the people and actions they document.</p><p>Each record keeps its source close, so you can see where information came from and judge it in context.</p><a className="inline-link" href={appUrl} target="_blank" rel="noreferrer">See the records <ArrowUpRight size={15} /></a></div></div>
    </section>

    <section className="records" id="records">
      <div className="records-heading"><div><p className="eyebrow dark-eyebrow">A WIDER VIEW OF PUBLIC LIFE</p><h2>One record leads<br />to another.</h2></div><p className="records-deck">Explore actions and statements in context, with direct paths back to the source.</p></div>
      <div className="record-grid">
        <article className="topic topic-ink"><span className="topic-num">01 / ACTION</span><div className="topic-icon"><Landmark size={19} /></div><h3>Legislation<br />& votes</h3><p>See bills, executive actions, and recorded votes as distinct parts of the public record.</p><span className="topic-arrow">↗</span></article>
        <article className="topic topic-paper"><span className="topic-num">02 / MONEY</span><div className="topic-icon"><Search size={19} /></div><h3>Campaign<br />finance</h3><p>Explore reported campaign finances and disclosures, with dates and filing sources attached.</p><span className="topic-arrow">↗</span></article>
        <article className="topic topic-gold"><span className="topic-num">03 / VOICE</span><div className="topic-icon"><ArrowUpRight size={19} /></div><h3>Endorsements<br />& positions</h3><p>Follow who endorsed whom and what public statements say, with direction and attribution intact.</p><span className="topic-arrow">↗</span></article>
      </div>
      <div className="coverage-note"><ShieldCheck size={17} /><span>Coverage is growing. Records show their scope, source, and available context.</span><a href={appUrl} target="_blank" rel="noreferrer">Browse the app <ArrowUpRight size={14} /></a></div>
    </section>

    <section className="closing"><div className="closing-mark"><span className="mark large-mark"><i /><i /><i /></span><span>PUBLIC RECORDS<br />ARE FOR EVERYONE.</span></div><div className="closing-copy"><p className="eyebrow">START WITH THE SOURCE</p><h2>Look closer.<br /><em>Follow through.</em></h2><a className="button-light" href={betaUrl} target="_blank" rel="noreferrer">Join the TestFlight beta <ArrowUpRight size={17} /></a></div><div className="closing-vertical">CIVIC LEDGER · THE PUBLIC RECORD</div></section>

    <footer><a className="wordmark footer-brand" href="#top"><span className="mark"><i /><i /><i /></span><span>CIVIC LEDGER</span></a><span>Public information, connected to its source.</span><a href={appUrl} target="_blank" rel="noreferrer">Enter the app <ExternalLink size={13} /></a><small>© {new Date().getFullYear()} Civic Ledger</small></footer>
  </main>;
}
