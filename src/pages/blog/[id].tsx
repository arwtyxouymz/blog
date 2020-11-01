import React, { useEffect } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'
import styled from 'styled-components'
import { getBlogData, getMetaData } from '@/plugins/markdown'
import Prism from '@/plugins/prism'
import { BlogHeader } from '@/types'
import BlogLayout from '@/templates/BlogLayout'
import MarkdownToHtml from '@/components/common/MarkdownToHtml'

const Wrapper = styled.div`
  padding: 48px 34px;
  margin: auto;
  max-width: 900px;
`

type Props = {
  source: string
  header: BlogHeader
}

const Blog: React.FC<Props> = ({ source, header }: Props) => {
  useEffect(() => {
    Prism.highlightAll()
  })
  return (
    <BlogLayout {...header}>
      <Wrapper>
        <MarkdownToHtml html={source} />
      </Wrapper>
    </BlogLayout>
  )
}

export default Blog

interface Params extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const id = params ? params.id : ''
  const blogData = getBlogData(id)
  return {
    props: {
      source: blogData.document,
      header: blogData.meta,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const metadatas = getMetaData()
  const paths = metadatas.map((meta) => {
    return {
      params: {
        id: meta.id,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}
