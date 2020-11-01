import fs from 'fs'
import path from 'path'
import MarkdownIt from 'markdown-it'
import meta from 'markdown-it-meta'
import { BlogHeader } from '../types'

const postsDirectory = path.join(process.cwd(), 'src/posts')

export function getMetaData(): BlogHeader[] {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .map((file) => getBlogData(file.replace(/\.md$/, '')).meta)
    .sort((prev, next) => {
      return prev.postedAt < next.postedAt ? 1 : -1
    })
}

interface GetBlogDataResult {
  document: string
  meta: BlogHeader
}

export function getBlogData(id: string): GetBlogDataResult {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const md = new MarkdownIt()
  md.use(meta)
  const renderedDocument = md.render(fileContents)
  return {
    document: renderedDocument,
    meta: md.meta,
  }
}
