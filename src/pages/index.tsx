import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Layout from '../templates/Layout'
import PageHeader from '../molecules/PageHeader'
import FlexContainer from '../atoms/containers/FlexContainer'
import Card from '../organisms/Card'
import { BlogHeader } from '../types'
import { getMetaData } from '../plugins/markdown'

interface Props {
  blogHeaders: BlogHeader[]
}

const Index: React.FC<Props> = ({ blogHeaders }: Props) => {
  return (
    <Layout>
      <PageHeader
        pageTitle="Blog"
        pageDescription="主に技術系やスタートアップ界隈のことについて書いていきます"
      ></PageHeader>
      <FlexContainer wrap={true} justify="center">
        {blogHeaders.map((header) => (
          <Link key={header.id} href="/blog/[id]" as={`/blog/${header.id}`}>
            <a>
              <Card
                title={header.title}
                description={header.description}
                date={header.date}
                tags={header.tags}
              />
            </a>
          </Link>
        ))}
      </FlexContainer>
    </Layout>
  )
}

export default Index

interface StaticProps {
  props: { blogHeaders: BlogHeader[] }
}

export async function getStaticProps(): Promise<StaticProps> {
  const allBlogHeaders = getMetaData()
  return {
    props: {
      blogHeaders: allBlogHeaders,
    },
  }
}
