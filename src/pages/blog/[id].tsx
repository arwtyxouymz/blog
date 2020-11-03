import React, { useEffect } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import styled from 'styled-components'
import { getBlogData, getMetaData } from '@/plugins/markdown'
import Prism from '@/plugins/prism'
import { BlogHeaderProps } from '@/types'
import BlogLayout from '@/templates/BlogLayout'
import MarkdownToHtml from '@/components/common/MarkdownToHtml'

const Wrapper = styled.div`
  padding: 24px 34px;
  margin: 34px auto;
  max-width: 900px;
  background-color: #fff;
  border-radius: 10px;
`

type Props = {
  source: string
  header: BlogHeaderProps
}

const Blog: React.FC<Props> = ({ source, header }: Props) => {
  useEffect(() => {
    Prism.highlightAll()
  })
  return (
    <BlogLayout header={header}>
      <Wrapper>
        <MarkdownToHtml html={source} />
      </Wrapper>
    </BlogLayout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const id = params?.id as string
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

export default Blog
