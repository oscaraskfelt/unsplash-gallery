import styled from 'styled-components';
import { Breakpoints } from '../../styles/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${Breakpoints.md} {
    flex-flow: row wrap;
    justify-content: center;
  }
`;
