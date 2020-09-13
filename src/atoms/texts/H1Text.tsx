import styled from 'styled-components'

const H1Text = styled.h1<{ color?: string }>`
  color: ${({ color }) => color};
  margin: 0;
  padding: 0;
`

export default H1Text
