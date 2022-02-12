import styled from 'styled-components'

export const HorizontalMargin = styled.div`
  margin-top: ${(props) =>
    props.m1 ? '2rem' : props.m2 ? '1rem' : props.m3 ? '0.6rem' : '0.4rem'};
  margin-bottom: ${(props) =>
    props.m1 ? '2rem' : props.m2 ? '1rem' : props.m3 ? '0.6rem' : '0.4rem'};
`

export const VerticalMargin = styled.div`
  margin-left: ${(props) =>
    props.m1 ? '2rem' : props.m2 ? '1rem' : props.m3 ? '0.6rem' : '0.4rem'};
  margin-right: ${(props) =>
    props.m1 ? '2rem' : props.m2 ? '1rem' : props.m3 ? '0.6rem' : '0.4rem'};
`
