import styled from 'styled-components';
import { XCircle } from 'react-feather';
import Color from '../../styles/Colors';

export const Modal = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  align-items: center;
  height: 100%;
`;

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  objec-fit: contain;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${Color.backdrop};
  width: 100%;
  height: 100%;
`;

export const CloseIcon = styled(XCircle)`
  position: absolute;
  top: 0;
  right: 0;
  color: ${Color.white};
  height: 3rem;
  width: 3rem;
  background: ${Color.backgroundBlur};
  margin: 1rem;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }
`;
