import styled from 'styled-components'

export const ConnectFormWrapper = styled.div`
  background-color: white;
  margin: 0 auto;
  border-radius: 6px;
  padding: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;

  .form-container {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    color: black;
  }

  .form-title {
    font-size: 22px;
    margin-bottom: 2rem;
    text-align: center;
  }

  .input-wrapper {
    margin-bottom: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
  }

  .create-account {
    color: black;
    display: flex;
    margin-top: 2rem;
  }

  .navigation-link {
    cursor: pointer;
    margin-left: 0.6rem;
  }
`
