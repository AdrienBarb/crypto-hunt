import styled from 'styled-components'

export const StyledCryptoCard = styled.div`
  border-radius: 6px;
  margin: 1rem 0 1rem 0;
  background-color: white;
  color: black;
  position: relative;
  height: 200px;

  .project-details-wrapper {
    width: 100%;
    z-index: 500;
  }

  .vote-buttons-wrapper {
    position: absolute;
    z-index: 1000;
    right: 0;
  }
`
