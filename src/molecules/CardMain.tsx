import React from 'react'
import styled from 'styled-components'
import FlexContainer from '../atoms/containers/FlexContainer'
import H3Text from '../atoms/texts/H3Text'
import PText from '../atoms/texts/PText'

interface Props {
  title: string
  description: string
}

const CardMain: React.FC<Props> = ({ title, description }: Props) => {
  return (
    <ExtendedFlexContainer direction="column" justify="center" align="center">
      <H3Text>{title}</H3Text>
      <ExtendedPText>{description}</ExtendedPText>
    </ExtendedFlexContainer>
  )
}

export default CardMain

const ExtendedFlexContainer = styled(FlexContainer)`
  width: 100%;
  height: 70%;
`

const ExtendedPText = styled(PText)`
  width: 80%;
  margin: 10px;
`
