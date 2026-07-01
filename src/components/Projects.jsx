const WORK_PROJECTS = [
  {
    path: 'ucf-portal',
    title: 'UCF Portal',
    desc: 'A responsive front-end application with reusable, scalable UI components — cut navigation latency by 40% and sped up development by 35%.',
    tags: ['React.js', 'JavaScript'],
  },
  {
    path: 'mycloud-ticketing',
    title: 'MyCloud Ticketing System',
    desc: 'A ticket-based support portal with role-based dashboards and real-time tracking — cut manual support load by 45% and resolution time by 30%.',
    tags: ['React.js', 'REST APIs', 'RBAC'],
  },
  {
    path: 'indiaai-speedcloud',
    title: 'IndiaAI SpeedCloud',
    desc: 'Front-end and purchase flow for a GPU marketplace platform — reduced drop-off by 20% and improved purchase efficiency by 25%.',
    tags: ['React.js', 'REST APIs'],
  },
]

const PERSONAL_PROJECTS = [
  {
    path: 'swiggy-clone',
    title: 'Swiggy Clone',
    desc: 'A food-ordering app with restaurant listings, menu browsing, and cart management, built to feel smooth across devices.',
    tags: ['React.js', 'REST APIs'],
  },
  {
    path: 'realtime-chat',
    title: 'Real-Time Chat Application',
    desc: 'An end-to-end chat app with bidirectional messaging over Socket.IO for low-latency delivery and live updates.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Socket.IO'],
  },
]

function ProjectCard({ project }) {
  return (
    <div className="proj-card">
      <div className="proj-path"><span>~/</span>{project.path}</div>
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
      <div className="proj-tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="sec-head">
          <h2>Projects</h2>
          <span className="sec-num">02 / work</span>
        </div>

        <div className="proj-grid">
          {WORK_PROJECTS.map((project) => (
            <ProjectCard project={project} key={project.path} />
          ))}
        </div>

        <div className="proj-personal-label">personal builds</div>
        <div className="proj-grid">
          {PERSONAL_PROJECTS.map((project) => (
            <ProjectCard project={project} key={project.path} />
          ))}
        </div>
      </div>
    </section>
  )
}
