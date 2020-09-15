import React from 'react'
import styled from 'styled-components'
import H2Text from '../atoms/texts/H2Text'
import PText from '../atoms/texts/PText'

interface Props {
  pageTitle: string
  pageDescription: string
}

const PageHeader: React.FC<Props> = ({ pageTitle, pageDescription }: Props) => {
  return (
    <Wrapper>
      <H2Text margin="20px">{pageTitle}</H2Text>
      <PText>{pageDescription}</PText>
    </Wrapper>
  )
}

export default PageHeader

const Wrapper = styled.div`
  margin: 40px auto;
  text-align: center;
`
