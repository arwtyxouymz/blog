import styled from 'styled-components'

interface Props {
  color?: string
  border?: number
  border_radius?: number
}

const SpanText = styled.span<Props>`
  color: ${({ color }) => color};
  margin: 0;
  padding: 0;
`

export default SpanText
