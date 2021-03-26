import styled, { css } from 'styled-components';

export const Image = styled.img`
  margin: 1rem;
  height: 100%;
  object-fit: cover;
`;

export const BackgroundImage = styled.div`
  height: 80vh;
  width: 100vw;

  ${({ src }) => {
    return css`
      background-image: url(${src});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    `;
  }}
`;

export const MetaDesc = styled.span`
  color: #333;
  background: #fafafa;
  padding: 1rem 6rem;
`;
