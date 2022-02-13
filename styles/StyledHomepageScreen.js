import styled from 'styled-components'

export const StyledHomepageScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 800px;
  height: 100vh;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`
