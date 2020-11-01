import React from 'react'
import styled from 'styled-components'
import Tag from '@/components/common/Tag'
import { BlogHeader } from '@/types'
import { MQ } from '@/constants'

const Wrapper = styled.div`
  margin: 2% auto;
  width: 28vw;
  max-width: 400px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 3px 3px 10px 5px rgba(0.5, 0.5, 0.5, 0.05);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  ${MQ.laptop} {
    width: 300px;
    height: 200px;
  }
  ${MQ.tablet} {
    width: 320px;
  }
  ${MQ.mobileL} {
    width: 90vw;
    height: 60vw;
  }
`

const TitleContainer = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

const Title = styled.h3`
  margin: 3% auto;
`
const Description = styled.p`
  margin: 3% auto;
  padding: 0 3%;
`

const InfoContainer = styled.div`
  background-color: #d8d8d8;
  height: 30%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 2%;
  color: #5c5c5c;
`

const TagText = styled(Tag)`
  font-size: 0.8em;
`

const DateText = styled.div`
  width: 100%;
  text-align: right;
  font-style: italic;
`

const Card: React.FC<BlogHeader> = ({ title, description, postedAt, tags }) => {
  return (
    <Wrapper>
      <TitleContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TitleContainer>
      <InfoContainer>
        <div>
          {tags.map((tag) => (
            <TagText color="#5C5C5C" key={tag}>
              {tag}
            </TagText>
          ))}
        </div>
        <DateText>{postedAt}</DateText>
      </InfoContainer>
    </Wrapper>
  )
}

export default Card
