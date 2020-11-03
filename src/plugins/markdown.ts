import fs from 'fs'
import path from 'path'
import MarkdownIt from 'markdown-it'
import { escapeHtml } from 'markdown-it/lib/common/utils'
import meta from 'markdown-it-meta'
import { BlogHeaderProps } from '../types'

const postsDirectory = path.join(process.cwd(), 'src/posts')

export function getMetaData(): BlogHeaderProps[] {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .map((file) => getBlogData(file.replace(/\.md$/, '')).meta)
    .sort((prev, next) => {
      return prev.postedAt < next.postedAt ? 1 : -1
    })
}

function rendererFence(md: MarkdownIt) {
  const defaultRender =
    md.renderer.rules.fence ||
    function (tokens, idx, options, _, self) {
      return self.renderToken(tokens, idx, options)
    }

  // override fence
  md.renderer.rules.fence = function (...args) {
    const [tokens, idx] = args
    // ex) python:main.py
    const langInfo = tokens[idx].info.split(/:/)
    const langName = langInfo?.length ? langInfo[0].trim() : ''
    const fileName = langName.length && langInfo[1] ? langInfo[1] : null

    tokens[idx].info = langName
    const originalHTML = defaultRender(...args)
    if (tokens[idx].content.length === 0) {
      return originalHTML
    }

    const fileNameHTML = fileName
      ? `<div class="code-block-filename-container"><span class="code-block-filename">${escapeHtml(
          fileName
        )}</span></div>`
      : ''

    return `
      <div class="code-block-container">
      ${fileNameHTML}
      ${originalHTML}
      </div>
    `
  }
}

interface GetBlogDataResult {
  document: string
  meta: BlogHeaderProps
}

export function getBlogData(id: string): GetBlogDataResult {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const md = new MarkdownIt()
  md.use(meta).use(rendererFence).use(require('markdown-it-image-lazy-loading'))
  const renderedDocument = md.render(fileContents)
  return {
    document: renderedDocument,
    meta: md.meta,
  }
}
