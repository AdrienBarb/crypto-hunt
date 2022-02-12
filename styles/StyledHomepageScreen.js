import styled from 'styled-components'

export const StyledHomepageScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10rem auto 0 auto;
  max-width: 800px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
