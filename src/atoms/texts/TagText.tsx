import styled from 'styled-components'

const TagText = styled.span<{ color: string }>`
  color: ${({ color }) => color};
  border: 1px solid ${({ color }) => color};
  padding: 5px 15px;
  border-radius: 15% / 50%;
  margin: 3px;
  display: inline-block;
`

export default TagText
