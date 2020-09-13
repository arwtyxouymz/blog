import React from 'react'
import styled from 'styled-components'
import Panel from '../atoms/containers/Panel'
import PText from '../atoms/texts/PText'
import TagText from '../atoms/texts/TagText'
import { BLACK20, BLACK80 } from '../_constants'

interface Props {
  tags: string[]
  date: string
}

const CardFooter: React.FC<Props> = ({ tags, date }: Props) => {
  return (
    <ExtendedPanel color={BLACK20}>
      <div>
        {tags.map((tag) => (
          <TagText key={tag} color="red">
            {tag}
          </TagText>
        ))}
      </div>
      <StyledDate color={BLACK80}>{date}</StyledDate>
    </ExtendedPanel>
  )
}

export default CardFooter

const ExtendedPanel = styled(Panel)`
  width: 100%;
  height: 30%;
  padding: 10px;
`

const StyledDate = styled(PText)`
  text-align: right;
  padding: 10px;
`
