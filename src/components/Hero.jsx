const FACTS = [
  { key: 'role', val: 'Full Stack Developer' },
  { key: 'company', val: 'NxtGen AI' },
  { key: 'based in', val: 'Bangalore, India' },
  { key: 'stack', val: 'MongoDB · Express · React · Node' },
  { key: 'status', val: 'open to work', accent: true },
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">available for work</div>
          <div className="role-title">Full-Stack<br />Developer <span>·</span> MERN</div>
          <h1>I build the systems underneath, and the interfaces you actually feel.</h1>
          <p className="hero-sub">I'm Arjun — working across MongoDB, Express, React, and Node. I care about the parts users never see as much as the ones they touch every day.</p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View projects</a>
            <a href="https://github.com/Arjun2002v" target="_blank" rel="noopener" className="btn btn-ghost">GitHub ↗</a>
          </div>
        </div>
        <div className="facts">
          {FACTS.map((fact) => (
            <div className="fact-row" key={fact.key}>
              <span className="fact-key">{fact.key}</span>
              <span className={`fact-val${fact.accent ? ' accent' : ''}`}>{fact.val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
