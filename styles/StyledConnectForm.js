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
    color: black;
    padding: 2rem;
    border: 1px solid black;
    border-radius: 6px;
    max-width: 400px;
    width: 100%;
  }

  .input-wrapper {
    margin-bottom: 1rem;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    display: flex;

    .text-input {
      border: none;
      padding: inherit;
      font-size: 18px;
      outline: none;
      width: 100%;
    }

    .form-error-message {
      color: red;
    }
  }

  .button-wrapper {
    text-align: center;
  }

  .form-button {
    background: black;
    padding: 0.2rem 0.6rem;
    border: 1px solid black;
    border-radius: 6px;
    color: white;
    cursor: pointer;
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
