import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const WorkIndex = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('/work/index.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
  }, [])

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <main className="max-w-2xl mx-auto px-6 pt-24 pb-24">
        <h1 className="font-serif text-2xl mb-16">Selected Work</h1>
        
        <div className="space-y-16">
          {projects.map((project) => (
            <article key={project.slug} className="group">
              <div className="mb-2">
                <time className="font-serif text-base text-gray-500">
                  {project.timeline}
                </time>
              </div>
              
              <h2 className="font-serif text-xl mb-2">
                <Link 
                  to={`/work/${project.slug}`} 
                  className="underline hover:no-underline"
                >
                  {project.title}
                </Link>
              </h2>
              
              {project.subtitle && (
                <h3 className="font-serif text-base mb-2 text-gray-600">
                  {project.subtitle}
                </h3>
              )}
              
              <p className="font-serif text-base text-gray-600">
                {project.role} • {project.platform}
              </p>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}

export default WorkIndex