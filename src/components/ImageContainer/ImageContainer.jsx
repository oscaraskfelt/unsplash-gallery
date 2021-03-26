import React from 'react';
import { Image } from '../ImageComponent';
import { Container } from './ImageContainer.style.js';
const ImageContainer = ({ images }) => {
  return (
    <Container>
      {images &&
        images.map((item, i) => (
          <Image key={i} src={item.urls.small} alt={item.alt_description} />
        ))}
    </Container>
  );
};

export default ImageContainer;

{
}
