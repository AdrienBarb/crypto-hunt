import styled from 'styled-components'

export const StyledHomepage = styled.div`
  background-image: url('/home-background.jpg');
  background-size: cover;
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    max-width: 500px;
    text-align: center;
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    font-family: 'Gagalin';
    color: white;
    font-size: 52px;
    margin-bottom: 0.6rem;
  }

  .sub-title {
    font-family: 'Anonymous Pro';
    color: white;
    font-size: 18px;
    margin-bottom: 1rem;
  }

  .link-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 124px;
  }
`
