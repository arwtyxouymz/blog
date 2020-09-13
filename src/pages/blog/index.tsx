import React from 'react'
import Layout from '../../templates/Layout'
import Card from '../../organisms/Card'
import FlexContainer from '../../atoms/containers/FlexContainer'
import H2Text from '../../atoms/texts/H2Text'
import { BlogHeader } from '../../types'

const Blog: React.FC = () => {
  const blogHeaders: BlogHeader[] = [
    {
      id: 1,
      title: 'RustでWebサーバーを構築した',
      description:
        'Rust+Rocketで簡単なWebサーバーを作ったのでその手順を記します',
      date: '2020-09-12',
      tags: ['rust', 'rocket'],
    },
    {
      id: 2,
      title: 'MaaS現状のグローバル分析',
      description: '各国におけるMaas基盤の現状と日本の進捗具合をまとめました',
      date: '2020-09-13',
      tags: ['business', 'MaaS'],
    },
    {
      id: 3,
      title: 'Next.jsでブログを作った',
      description: 'Reactの勉強がてらNext.jsとSSRでブログを作りました',
      date: '2020-09-11',
      tags: ['React', 'Next.js', 'Frontend'],
    },
  ]

  return (
    <Layout>
      <H2Text>Blog</H2Text>
      <FlexContainer wrap={true} justify="center">
        {blogHeaders.map((header) => (
          <Card
            key={header.id}
            title={header.title}
            description={header.description}
            date={header.date}
            tags={header.tags}
          />
        ))}
      </FlexContainer>
    </Layout>
  )
}

export default Blog
