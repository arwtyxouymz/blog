import React from 'react'
import styled from 'styled-components'
import HeaderTemplate from '@/components/common/HeaderTemplate'
import Title from '@/components/common/Title'
import Subtitle from '@/components/common/Subtitle'
import { BLOG_TITLE, MQ } from '@/constants'

const TextContainer = styled.div`
  text-align: center;
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

const Header: React.FC = () => {
  const description = 'Playing, Woking, and Learning is my Engine'
  return (
    <HeaderTemplate title={BLOG_TITLE} description={description}>
      <TextContainer>
        <div>
          <Title>{BLOG_TITLE}</Title>
          <Subtitle>{description}</Subtitle>
        </div>
      </TextContainer>
    </HeaderTemplate>
  )
}

export default Header
