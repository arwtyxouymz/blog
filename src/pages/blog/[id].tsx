import React, { useEffect } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'
import styled from 'styled-components'
import Layout from '../../templates/Layout'
import { getBlogData, getMetaData } from '../../plugins/markdown'
import Prism from '../../plugins/prism'
import { BlogHeader } from '../../types'

interface Props {
  document: string
  header: BlogHeader
}

const Blog: React.FC<Props> = ({ document, header }: Props) => {
  useEffect(() => {
    Prism.highlightAll()
  })
  return (
    <>
      <Layout coverTitle={header.title} coverDescription={header.description}>
        <Wrapper>
          <MarkdownRenderer dangerouslySetInnerHTML={{ __html: document }} />
        </Wrapper>
      </Layout>
    </>
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

const Wrapper = styled.div`
  padding: 48px 34px;
  margin: auto;
  max-width: 900px;
`

const MarkdownRenderer = styled.div`
  & > hr {
    display: none;
  }

  & > h1,
  & > h2,
  & > h3,
  & > h4,
  & > p {
    margin: 24px 48px;
  }
  & > h2 {
    display: inline;
    background: linear-gradient(transparent 80%, red 0%);
  }
  & > h3::before {
    color: red;
    content: '●';
  }
  & > p {
    line-height: 2em;
    vertical-align: baseline;
    font-weight: 300;
  }
  & > ul,
  & > ol {
    font-weight: 300;
    margin: 24px 48px;
  }
  & > strong {
    background: linear-gradient(transparent 70%, red 0%);
  }
  & > pre {
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
      0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
    font-size: 0.9rem;
    margin-bottom: 36px;
  }
  & > p > code {
    background-color: #e1fff8;
    padding: 4px;
  }
  & > img {
    margin: auto;
    width: 80%;
  }
  & > blockquote {
    padding: 12px 6px;
    border-left: 4px rgba(0, 255, 196, 1) solid;
    background-color: #e1fff8;
  }
  & > a {
    color: red;
    word-break: break-all;
  }
  & > table {
    padding: 0;
  }
  & > table tr {
    border-top: 1px solid #cccccc;
    background-color: white;
    margin: 0;
    padding: 0;
  }
  & > table tr:nth-child(2n) {
    background-color: #f8f8f8;
  }
  & > table tr th {
    font-weight: bold;
    border: 1px solid #cccccc;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
  }
  & > table tr td {
    border: 1px solid #cccccc;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
  }
  & > table tr th :first-child,
  & > table tr td :first-child {
    margin-top: 0;
  }
  & > table tr th :last-child,
  & > table tr td :last-child {
    margin-bottom: 0;
  }
`
