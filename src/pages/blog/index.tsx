import React from 'react'
import Link from 'next/link'
import Layout from '../../templates/Layout'
import Card from '../../organisms/Card'
import FlexContainer from '../../atoms/containers/FlexContainer'
import H2Text from '../../atoms/texts/H2Text'
import { BlogHeader } from '../../types'
import { getMetaData } from '../../plugins/markdown'

interface Props {
  blogHeaders: BlogHeader[]
}

const Blog: React.FC<Props> = ({ blogHeaders }: Props) => {
  return (
    <Layout>
      <H2Text>Blog</H2Text>
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

export default Blog

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
