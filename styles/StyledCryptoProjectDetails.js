import styled from 'styled-components'

export const StyledCryptoProjectDetails = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .links-wrapper {
    display: flex;
  }

  .numbers-row {
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .crypto-events-wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .bottom-card {
    background-color: #dfe0e2;
    width: 100%;
    border-radius: 6px;
    margin-top: 0.4rem;
    padding: 0.4rem;
  }
`
