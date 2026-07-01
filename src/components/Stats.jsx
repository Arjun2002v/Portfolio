const STATS = [
  { num: 45, cap: 'support workload reduced' },
  { num: 40, cap: 'nav latency cut' },
  { num: 30, cap: 'faster ticket resolution' },
  { num: 25, cap: 'purchase efficiency gained' },
]

export default function Stats() {
  return (
    <section className="stats" style={{ borderTop: 'none', padding: 0 }}>
      <div className="stats-grid">
        {STATS.map((stat) => (
          <div className="stat-item" key={stat.cap}>
            <div className="stat-num">{stat.num}<span>%</span></div>
            <div className="stat-cap">{stat.cap}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
