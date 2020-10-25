import React from 'react'
import NavigationBar from '@/components/common/NavigationBar'
import styled from 'styled-components'
import { BLOG_TITLE, MQ } from '@/constants'

const StyledHeader = styled.header`
  background-image: url('/cover.jpg');
  background-size: cover;
  background-position: center;
`

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

const BlogTitle = styled.h1`
  color: white;
  font-size: 70px;
  margin: 0.1em auto;
  ${MQ.tablet} {
    font-size: 60px;
  }
  ${MQ.mobileL} {
    font-size: 45px;
  }
`

const SubTitle = styled.p`
  color: white;
  margin: 0 auto;
  font-size: 20px;
  ${MQ.mobileL} {
    font-size: 16px;
  }
`

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <NavigationBar />
      <TextContainer>
        <div>
          <BlogTitle>{BLOG_TITLE}</BlogTitle>
          <SubTitle>This is subtitle</SubTitle>
        </div>
      </TextContainer>
    </StyledHeader>
  )
}

export default Header
