import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'
import Layout from '../../templates/Layout'
import { getBlogData, getMetaData } from '../../plugins/markdown'
import { BlogHeader } from '../../types'

interface Props {
  document: string
  header: BlogHeader
}

const Blog: React.FC<Props> = ({ document, header }: Props) => {
  return (
    <Layout coverTitle={header.title} coverDescription={header.description}>
      Blog
    </Layout>
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
      document: blogData.document,
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
