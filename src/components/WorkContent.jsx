import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const WorkContent = ({ project }) => {
  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <main className="max-w-2xl mx-auto px-6 pt-24 pb-24">
        <Link 
          to="/" 
          className="font-serif text-base font-normal no-underline hover:underline mb-16 inline-block"
        >
          ← back to home
        </Link>
      
        <article className="prose prose-slate max-w-none">
          <header className="mt-1 mb-8 not-prose">
            <h1 className="font-serif text-[28px] mb-2 font-medium leading-tight">{project.title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <h2 className="font-serif text-sm text-gray-500 mb-1">Platform</h2>
                <p className="font-serif text-base">{project.platform}</p>
              </div>
              <div>
                <h2 className="font-serif text-sm text-gray-500 mb-1">Timeline</h2>
                <p className="font-serif text-base">{project.timeline}</p>
              </div>
              <div>
                <h2 className="font-serif text-sm text-gray-500 mb-1">Role</h2>
                <p className="font-serif text-base">{project.role}</p>
              </div>
              <div>
                <h2 className="font-serif text-sm text-gray-500 mb-1">Core responsibilities</h2>
                <p className="font-serif text-base">{project.responsibilities}</p>
              </div>
            </div>
          </header>
          
          <div 
            className="[&_figure.reduced-width]:w-3/4 [&_figure.reduced-width]:mx-auto prose-img:max-w-full prose-img:!w-auto prose-figure:my-12 prose-figcaption:text-sm prose-figcaption:text-gray-500 prose-figcaption:text-center prose-p:text-black prose-p:font-serif prose-ul:font-serif prose-ul:text-black prose-li:marker:text-black prose-h2:font-serif"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        </article>

        <Link 
          to="/" 
          className="font-serif text-base font-normal no-underline hover:underline mt-16 mb-16 inline-block"
        >
          ← back to home
        </Link>
      </main>
    </div>
  )
}

WorkContent.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    platform: PropTypes.string.isRequired,
    timeline: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    responsibilities: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired
}

export default WorkContent