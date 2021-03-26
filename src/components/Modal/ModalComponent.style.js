import styled from 'styled-components';
import { XCircle } from 'react-feather';

export const Modal = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  align-items: center;
  height: 100%;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000066;
  width: 100%;
  height: 100%;
`;

export const CloseIcon = styled(XCircle)`
  position: absolute;
  top: 0;
  color: white;
  height: 3rem;
  width: 3rem;
  align-self: flex-end;
`;
