import styled from 'styled-components'

export const StyledCryptoCard = styled.div`
  border-radius: 6px;
  margin: 1rem 0 1rem 0;
  background-color: white;
  color: black;
  padding: 1rem;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  box-sizing: border-box;

  .top-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .bottom-card {
    background-color: #dfe0e2;
    zidth: 100%;
    border-radius: 6px;
    margin-top: 0.4rem;
    padding: 0.4rem;
  }

  .project-details-wrapper {
    width: 100%;
    z-index: 500;
    max-width: 60%;
  }

  .description {
    @media (max-width: 768px) {
      display: none;
    }
  }

  .links-wrapper {
    display: flex;
  }

  .vote-buttons-wrapper {
    z-index: 1000;
    right: 2rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    .vote-button {
      cursor: pointer;
    }
  }
`
