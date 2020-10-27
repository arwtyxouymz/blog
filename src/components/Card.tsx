import React from 'react'
import styled from 'styled-components'
import CardMain from '../molecules/CardMain'
import CardFooter from '../molecules/CardFooter'

interface Props {
  title: string
  description: string
  date: string
  tags: string[]
}

const Card: React.FC<Props> = ({ title, description, date, tags }: Props) => {
  return (
    <Wrapper>
      <CardMain title={title} description={description} />
      <CardFooter tags={tags} date={date} />
    </Wrapper>
  )
}

export default Card

const Wrapper = styled.div`
  margin: 30px;
  max-width: 400px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 3px 3px 10px 5px rgba(0.5, 0.5, 0.5, 0.05);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`
