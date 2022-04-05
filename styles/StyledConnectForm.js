import styled from 'styled-components'

export const ConnectFormWrapper = styled.div`
  background-color: white;
  margin: 0 auto;
  border-radius: 6px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;

  .form-container {
    color: black;
    width: 100%;
  }

  .input-wrapper {
    flex-direction: column;
    align-items: start;
    justify-content: center;
    display: flex;
    background-color: #eff2f5;
    border-radius: 6px;
    padding: 0.4rem;

    .text-input {
      border: none;
      padding: inherit;
      font-size: 18px;
      outline: none;
      width: 100%;
      background-color: #eff2f5;
      padding: 0;
    }

    .form-error-message {
      color: red;
    }
  }

  .input {
    background-color: #eff2f5;
  }

  .button-wrapper {
    text-align: center;
  }

  .form-button {
    background: black;
    padding: 0.4rem 0.6rem;
    border: 1px solid black;
    border-radius: 6px;
    color: white;
    cursor: pointer;
    margin: 0 auto;
    width: 100%;
  }

  .create-account {
    color: black;
    display: flex;
    margin-top: 2rem;
    margin: 0 auto;
    width: fit-content;
  }

  .navigation-link {
    cursor: pointer;
    margin-left: 0.6rem;
  }
`
