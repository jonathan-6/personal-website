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
    return work.sort((a, b) => (a.timeline > b.timeline ? -1 : 1))
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