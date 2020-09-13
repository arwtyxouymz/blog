import styled from 'styled-components'

interface Props {
  wrap?: boolean
  justify?: string
  align?: string
  direction?: string
}

const FlexContainer = styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'no-wrap')};
  justify-content: ${({ justify }) => justify || 'center'};
  align-items: ${({ align }) => align || 'stretch'};
`

export default FlexContainer
