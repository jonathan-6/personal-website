import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getWorkBySlug } from '../../lib/work'
import WorkContent from '../../components/WorkContent'

const WorkPage = () => {
  const { slug } = useParams()
  const [project, setProject] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadProject = async () => {
      try {
        const projectData = await getWorkBySlug(slug)
        setProject(projectData)
      } catch (error) {
        console.error('Error loading project:', error)
        setError(error.message)
      }
    }

    loadProject()
  }, [slug])

  if (error) {
    return <div>Error loading project: {error}</div>
  }

  if (!project) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <WorkContent project={project} />
    </div>
  )
}

export default WorkPage