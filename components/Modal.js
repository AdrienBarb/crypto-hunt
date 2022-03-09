import React from 'react'
import { StyledModal } from '../styles/StyledModal'
import { ImCross } from 'react-icons/im'
import { StyledText } from '../styles/StyledText'
import { HorizontalMargin } from '../styles/StyledMargin'

const Modal = ({ visible, children, setShowModal, modalTitle }) => {
  return (
    <StyledModal visible={visible}>
      <div className="modal-wrapper">
        <ImCross
          size={16}
          className="cross-icon"
          onClick={() => setShowModal(false)}
        />
        <StyledText h2 karla bold>
          {modalTitle}
        </StyledText>
        <HorizontalMargin m1 />
        {children}
      </div>
    </StyledModal>
  )
}

export default Modal
