import React from 'react'
import styled from 'styled-components'
import HeaderTemplate from '@/components/common/HeaderTemplate'
import Title from '@/components/common/Title'
import Subtitle from '@/components/common/Subtitle'
import Tag from '@/components/common/Tag'
import { MQ } from '@/constants'

const TextContainer = styled.div`
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5em;
  height: 400px;
  ${MQ.tablet} {
    height: 360px;
  }
  ${MQ.mobileL} {
    height: 50vh;
  }
`

const BlogTitle = styled(Title)`
  font-size: 55px;
  margin: 0.5em auto;
  ${MQ.tablet} {
    font-size: 40px;
  }
  ${MQ.mobileL} {
    font-size: 25px;
  }
`

const PostedAt = styled.p`
  color: white;
  font-size: 18px;
  font-style: italic;
`

type Props = {
  title: string
  description: string
  postedAt: string
  tags: string[]
}

const BlogHeader: React.FC<Props> = ({
  title,
  description,
  postedAt,
  tags,
}: Props) => {
  return (
    <HeaderTemplate title={title} description={description}>
      <TextContainer>
        <div>
          {tags.map((tag) => (
            <Tag as="button" key={tag}>
              {tag}
            </Tag>
          ))}
          <BlogTitle>{title}</BlogTitle>
          <Subtitle>{description}</Subtitle>
          <PostedAt>{postedAt}</PostedAt>
        </div>
      </TextContainer>
    </HeaderTemplate>
  )
}

export default BlogHeader
