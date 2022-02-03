import styled from 'styled-components'

export const NavigationWrapper = styled.div`
  background-color: black;
  padding: 1rem 2rem;

  .navigation-container {
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navigation-link {
    color: white;
    cursor: pointer;
  }

  .connection-link {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .connect-button {
    background-color: black;
    color: white;
    cursor: pointer;
    padding: 0.2rem;
    border-radius: 6px;
    margin-left: 1rem;
    transition: 0.2s all;

    &:hover {
      cursor: pointer;
      color: black;
      background-color: white;
      transition: 0.2s all;
    }
  }
`
