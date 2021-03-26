import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { ImageContainer } from './components/ImageContainer';
import { GlobalStyle } from './styles/index';

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loader = useRef(null);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((page) => page + 1);
    }
  };

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  useEffect(() => {
    const fetchData = () => {
      axios('https://api.unsplash.com/photos', {
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`,
        },
        params: { per_page: 10, page: page },
      })
        .then((result) => {
          setImages((images) => images.concat(result.data));
        })
        .catch((error) => {
          console.warn(error);
        })
        .finally(setLoading(false));
    };

    fetchData();
  }, [page]);

  return (
    <>
      <GlobalStyle />
      <ImageContainer images={images} />
      <div>{loading ? 'loading...' : <div ref={loader}></div>}</div>
    </>
  );
}

export default App;
