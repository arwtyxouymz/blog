import styled from 'styled-components'

const H3Text = styled.h3<{ color?: string }>`
  color: ${({ color }) => color};
  margin: 0;
  padding: 0;
`

export default H3Text
