import styled from 'styled-components'

export const StyledText = styled.div`
  color: ${(props) => props.color};
  font-family: ${(props) => (props.karla ? 'Karla' : 'Space Mono')};
  text-align: ${(props) => (props.center ? 'center' : 'start')};
  font-size: ${(props) =>
    props.h1
      ? '62px'
      : props.h2
      ? '28px'
      : props.h3
      ? '22px'
      : props.h4
      ? '18px'
      : props.h5
      ? '12px'
      : '14px'};

  font-weight: ${(props) =>
    props.bold ? '800' : props.regular ? '500' : props.light ? '200' : '500'};
  cursor: ${(props) => (props.link ? 'pointer' : 'default')};

  @media (max-width: 768px) {
    font-size: ${(props) =>
      props.h1
        ? '42px'
        : props.h2
        ? '28px'
        : props.h3
        ? '22px'
        : props.h4
        ? '18px'
        : '14px'};
  }

  @media (max-width: 425px) {
    font-size: ${(props) =>
      props.h1
        ? '32px'
        : props.h2
        ? '26px'
        : props.h3
        ? '20px'
        : props.h4
        ? '16px'
        : '12px'};
  }
`
