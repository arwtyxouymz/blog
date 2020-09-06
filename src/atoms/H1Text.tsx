import styled from 'styled-components'

const H1Text = styled.h1<{ color?: string }>`
  color: ${({ color }) => color};
`

export default H1Text
