import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true
})

export async function getAllWork() {
  try {
    const response = await fetch('/work/index.json')
    const work = await response.json()
    return work.sort((a, b) => {
      // Parse end dates from timeline (e.g., "May 2024 - Oct 2024")
      const getEndDate = (timeline) => {
        const endPart = timeline.split('-')[1].trim()
        const [month, year] = endPart.split(' ')
        return new Date(Date.parse(`${month} 1, ${year}`))
      }

      // Compare end dates for sorting
      const dateA = getEndDate(a.timeline)
      const dateB = getEndDate(b.timeline)
      return dateB - dateA // Most recent first
    })
  } catch (error) {
    console.error('Error loading work:', error)
    throw error
  }
}

export async function getWorkBySlug(slug) {
  try {
    console.log('Fetching work:', slug) // Debug log
    const response = await fetch(`/work/${slug}.md`)
    if (!response.ok) throw new Error('Work not found')
    
    const markdown = await response.text()
    console.log('Raw markdown:', markdown) // Debug log
    
    const { frontmatter, content } = parseMarkdownFile(markdown)
    console.log('Parsed content:', content) // Debug log
    
    const renderedContent = md.render(content)
    console.log('Rendered HTML:', renderedContent) // Debug log

    return {
      slug,
      content: renderedContent,
      ...frontmatter
    }
  } catch (error) {
    console.error('Error in getWorkBySlug:', error)
    throw error
  }
}

function parseMarkdownFile(fileContent) {
  const frontmatterRegex = /---\r?\n([\s\S]*?)\r?\n---/
  const frontmatterMatch = frontmatterRegex.exec(fileContent)
  const frontmatter = {}
  
  if (frontmatterMatch) {
    const frontmatterLines = frontmatterMatch[1].split('\n')
    frontmatterLines.forEach(line => {
      const [key, ...valueArr] = line.split(':')
      if (key && valueArr.length) {
        frontmatter[key.trim()] = valueArr.join(':').trim().replace(/^['"](.*)['"]$/, '$1')
      }
    })
  }

  const content = fileContent
    .slice(frontmatterMatch ? frontmatterMatch[0].length : 0)
    .trim()

  return {
    frontmatter,
    content
  }
}