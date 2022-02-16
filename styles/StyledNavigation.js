import styled from 'styled-components'

export const NavigationWrapper = styled.div`
  background-color: black;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;

  .navigation-container {
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navigations-links {
    display: flex;
  }

  .navigation-link {
    color: white;
    cursor: pointer;
    margin-right: 1rem;
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
    bor kmsanklsadnmmsder-radius: 6px;
    margin-left: 1rem;
    transition: 0.2s all;

    &:hover {
      cursor: pointer;
      color: black;
      background-color: white;
      transition: 0.2s all;
    }
  }

  .hamburger-menu {
    z-index: 10000;
    position: relative;
  }
`

export const StyledFullScreenNavigation = styled.div`
  background-color: black;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .navigations-links {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .connection-link {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
