import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Layout from '@/templates/Layout'
import Card from '@/components/Card'
import { BlogHeaderProps } from '@/types'
import { getMetaData } from '@/plugins/markdown'

const Flex = styled.div`
  width: 90%;
  margin: 3% auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

type Props = {
  blogHeaders: BlogHeaderProps[]
}

const Index: React.FC<Props> = ({ blogHeaders }) => {
  return (
    <Layout>
      <Flex>
        {blogHeaders.map((header) => (
          <Link key={header.id} href="/blog/[id]" as={`/blog/${header.id}`}>
            <a>
              <Card {...header} />
            </a>
          </Link>
        ))}
      </Flex>
    </Layout>
  )
}

export default Index

type StaticProps = {
  props: { blogHeaders: BlogHeaderProps[] }
}

export async function getStaticProps(): Promise<StaticProps> {
  const allBlogHeaders = getMetaData()
  return {
    props: {
      blogHeaders: allBlogHeaders,
    },
  }
}
