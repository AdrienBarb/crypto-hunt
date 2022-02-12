import styled from 'styled-components'

export const HorizontalDivider = styled.div`
  width: ${(props) => props.width};
  background-color: ${(props) => props.color};
  height: 2px;
`

export const VerticalDivider = styled.div`
  width: 2px;
  background-color: ${(props) => props.color};
  height: ${(props) => props.height};
`
