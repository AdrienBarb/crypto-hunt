import React from 'react'
import { StyledModal } from '../styles/StyledModal'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { StyledText } from '../styles/StyledText'
import { HorizontalMargin } from '../styles/StyledMargin'

const Modal = ({ visible, children, setShowModal, modalTitle }) => {
  return (
    <StyledModal visible={visible}>
      <div className="modal-wrapper">
        <AiOutlineCloseCircle
          size={22}
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
