const PROJECTS = [
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
  {
    path: 'mini-socio',
    title: 'Mini Socio — Social Media API',
    desc: 'A backend-only social networking API built to practice server architecture — JWT authentication, MongoDB data modeling, media uploads, and Socket.IO for real-time notifications.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Socket.IO'],
  },
  {
    path: 'netflix-clone',
    title: 'Netflix Clone',
    desc: 'A Netflix-style streaming UI clone with Firebase-backed login and sign-up, and client-side routing between the browsing and auth screens.',
    tags: ['React.js', 'Tailwind CSS', 'Firebase', 'React Router'],
  },
  {
    path: 'pizza-project',
    title: 'Pizza Ordering App',
    desc: 'A food-ordering app covering restaurant browsing, menu selection, cart, and checkout — using Jotai for atom-based state management and Firebase for authentication.',
    tags: ['React.js', 'Jotai', 'Firebase', 'Tailwind CSS'],
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
          {PROJECTS.map((project) => (
            <ProjectCard project={project} key={project.path} />
          ))}
        </div>
      </div>
    </section>
  )
}
