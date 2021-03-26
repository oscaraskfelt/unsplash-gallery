import React from 'react';
import PropTypes from 'prop-types';
import { Figure, Image } from './ImageComponent.style.js';

const ImageComponent = ({ src, alt }) => {
  return (
    <Figure>
      <Image src={src} alt={alt}></Image>
    </Figure>
  );
};

ImageComponent.defaultProps = {
  alt: 'Image',
  src:
    'https://images.unsplash.com/photo-1593642532009-6ba71e22f468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTc4MDR8MXwxfGFsbHwxMXx8fHx8fDJ8fDE2MTY3NjQwOTM&ixlib=rb-1.2.1&q=80&w=400',
};

ImageComponent.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default ImageComponent;
