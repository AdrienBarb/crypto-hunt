import styled from 'styled-components'

export const StyledModal = styled.div`
  position: fixed;
  z-index: 11000;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);

  .modal-wrapper {
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 6px;
    padding: 1rem 2rem;
    position: relative;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 100%;
    max-width: 460px;
  }

  .cross-icon {
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
    cursor: pointer;
  }
`
