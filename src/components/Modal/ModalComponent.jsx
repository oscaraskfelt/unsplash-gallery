import React from 'react';
import {
  Modal,
  Backdrop,
  ModalContent,
  CloseIcon,
} from './ModalComponent.style';

const ModalComponent = ({ children, onClose }) => {
  return (
    <Modal>
      <ModalContent onDoubleClick={onClose}>
        <CloseIcon onClick={onClose} />
        {children}
      </ModalContent>
      <Backdrop onClick={onClose} />
    </Modal>
  );
};

export default ModalComponent;
