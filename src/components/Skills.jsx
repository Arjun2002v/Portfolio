import { useState } from 'react'

const CORE_STACK = [
  { letter: 'M', name: 'MongoDB', role: 'database' },
  { letter: 'E', name: 'Express.js', role: 'backend' },
  { letter: 'R', name: 'React.js', role: 'frontend' },
  { letter: 'N', name: 'Node.js', role: 'runtime' },
]

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'languages', label: 'Languages' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'databases', label: 'Databases' },
  { id: 'ai', label: 'AI & Emerging' },
  { id: 'platforms', label: 'Platforms' },
]

const SKILL_GROUPS = [
  {
    group: 'languages',
    title: 'languages',
    tags: ['JavaScript', 'TypeScript', 'Python'],
  },
  {
    group: 'frontend',
    title: 'frontend',
    tags: ['Redux Toolkit', 'React Router', 'Tailwind CSS', 'Shadcn', 'Material UI', 'HTML5', 'CSS3'],
  },
  {
    group: 'backend',
    title: 'backend',
    tags: ['REST APIs', 'JWT Auth', 'Socket.IO'],
  },
  {
    group: 'databases',
    title: 'databases',
    tags: ['MySQL', 'PostgreSQL'],
  },
  {
    group: 'ai',
    title: 'ai & emerging tech',
    subtitle: '— theoretical understanding',
    fullSpan: true,
    theory: true,
    tags: ['RAG (Retrieval-Augmented Generation)', 'LangChain', 'LLM Fundamentals', 'Prompt Engineering', 'CI/CD Pipelines'],
  },
  {
    group: 'platforms',
    title: 'platforms',
    tags: ['Git', 'GitHub', 'Docker', 'Linux', 'Postman', 'VS Code'],
  },
]

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all')

  return (
    <section id="skills">
      <div className="wrap">
        <div className="sec-head">
          <h2>The stack</h2>
          <span className="sec-num">01 / skills</span>
        </div>

        <div className="core-stack">
          {CORE_STACK.map((item) => (
            <div className="core-item" key={item.name}>
              <span className="core-letter">{item.letter}</span>
              <div>
                <div className="core-name">{item.name}</div>
                <div className="core-role">{item.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-toolbar">
          <div className="skill-filters">
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                className={`filter-btn${activeFilter === filter.id ? ' active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="skill-legend">
            <span><i className="swatch swatch-solid"></i>hands-on</span>
            <span><i className="swatch swatch-dashed"></i>theoretical</span>
          </div>
        </div>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group) => {
            const dimmed = activeFilter !== 'all' && activeFilter !== group.group
            return (
              <div
                key={group.group}
                className={`skill-group${group.fullSpan ? ' full-span' : ''}${dimmed ? ' dimmed' : ''}`}
              >
                <h3>{group.title}{group.subtitle ? <em> {group.subtitle}</em> : null}</h3>
                <div className="tag-row">
                  {group.tags.map((tag) => (
                    <span className={`tag${group.theory ? ' tag-theory' : ''}`} key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
