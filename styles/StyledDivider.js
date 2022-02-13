import styled from 'styled-components'

export const HorizontalDivider = styled.div`
  width: ${(props) => props.width};
  background-color: ${(props) => props.color};
  height: 2px;
  margin: ${(props) => (props.margin ? props.margin : '2rem')} 0;
  opacity: ${(props) => props.opacity};
`

export const VerticalDivider = styled.div`
  width: 2px;
  background-color: ${(props) => props.color};
  height: ${(props) => props.height};
  margin: 0 ${(props) => (props.margin ? props.margin : '2rem')};
`
