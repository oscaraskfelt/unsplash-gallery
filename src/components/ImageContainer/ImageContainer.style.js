import styled, { css } from 'styled-components';
import { Breakpoints } from '../../styles/Breakpoints';
import Color from '../../styles/Colors';
import { ArrowLeft as ArrLeft, ArrowRight as ArrRight } from 'react-feather';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${Breakpoints.md} {
    flex-flow: row wrap;
    justify-content: center;
  }
`;

export const ControlSpan = styled.span`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: ${Color.white};
`;

const arrowStyle = css`
  height: 3rem;
  width: 3rem;
  background: ${Color.backgroundBlur};
  margin: 1rem;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }
`;

export const ArrowLeft = styled(ArrLeft)`
  ${arrowStyle}
`;
export const ArrowRight = styled(ArrRight)`
  ${arrowStyle}
`;
