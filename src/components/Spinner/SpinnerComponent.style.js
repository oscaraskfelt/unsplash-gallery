import styled, { keyframes } from 'styled-components';
import Color from '../../styles/Colors';

const load = keyframes`
   0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export default styled.div`
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 10em;
  height: 10em;
  overflow: hidden;
  border-radius: 50%;
  background: ${Color.primary};
  background: linear-gradient(
    to right,
    ${Color.primary} 10%,
    rgba(255, 255, 255, 0) 42%
  );
  position: relative;
  animation: ${load} 1.4s infinite linear;

  transform: translateZ(0);

  &:before {
    width: 50%;
    height: 50%;
    background: ${Color.primary};
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }

  &:after {
    background: ${Color.background};
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;
