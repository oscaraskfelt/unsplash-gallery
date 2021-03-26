import React, { useState } from 'react';
import { Image } from '../ImageComponent';
import {
  Container,
  ControlSpan,
  ArrowLeft,
  ArrowRight,
} from './ImageContainer.style.js';
import { Modal } from '../Modal';

const ImageContainer = ({ images }) => {
  const [index, setindex] = useState(null);
  const [showSplash, setShowSplash] = useState(false);

  const enlarge = (index) => {
    setindex(index);
    setShowSplash(true);
  };

  const close = () => {
    setShowSplash(false);
  };

  const nextImage = () => {
    if (index + 1 < images.length) setindex((index) => index + 1);
  };

  const prevImage = () => {
    if (index - 1 >= 0) setindex((index) => index - 1);
  };

  return (
    <Container>
      {showSplash && (
        <Modal onClose={close}>
          <Image
            asBackground
            src={images[index].urls.regular}
            height={images[index].height}
            width={images[index].width}
          />
          <ControlSpan>
            <ArrowLeft onClick={prevImage} />
            <ArrowRight onClick={nextImage} />
          </ControlSpan>
        </Modal>
      )}
      {images &&
        images.map((item, i) => (
          <Image
            key={i}
            src={item.urls.small}
            alt={item.alt_description}
            enlarge={() => enlarge(i)}
          />
        ))}
    </Container>
  );
};

export default ImageContainer;
