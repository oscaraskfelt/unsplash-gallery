import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [Images, setImages] = useState(null);
  const [page, setPage] = useState(0);

  const fetchData = async (url) => {
    const result = await axios(url, {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`,
      },
      params: { per_page: 30, page: page },
    });
    console.log(result);
    setPage(page + 1);
    setImages(result.data);
  };

  useEffect(() => {
    const url = 'https://api.unsplash.com/photos';
    // fetchData(url);
  }, []);

  return <div>clean slate</div>;
}

export default App;
