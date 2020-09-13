import styled from 'styled-components'

const Panel = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
`

export default Panel
