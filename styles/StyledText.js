import styled from 'styled-components'

export const StyledText = styled.div`
  color: ${(props) => props.color};
  font-family: ${(props) => (props.karla ? 'Karla' : 'Space Mono')};
  font-size: ${(props) =>
    props.h1
      ? '62px'
      : props.h2
      ? '28px'
      : props.h3
      ? '22px'
      : props.h4
      ? '18px'
      : '14px'};

  font-weight: ${(props) =>
    props.bold ? '800' : props.regular ? '500' : props.light ? '200' : '500'};
`
