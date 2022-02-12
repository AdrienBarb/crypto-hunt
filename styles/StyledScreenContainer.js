import styled from 'styled-components'

export const ScreenContainer = styled.div`
  margin: 6rem auto 0 auto;
  max-width: 1400px;
  width: 100%;
  flex: 1;
`

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  align-items: center;
  justify-content: ${(props) =>
    props.justifyCenter
      ? 'center'
      : props.justifyBetween
      ? 'space-between'
      : 'space-around'};
`
