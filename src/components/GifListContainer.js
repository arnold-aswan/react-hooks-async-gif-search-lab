import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);

  const handleSubmit = (search) => {
    // console.log(search);
    fetchGifs(search);
  };

  const fetchGifs = (gif) => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${gif}&api_key=qizDTpyy5trNl4NenfwzzChr91Rd8uD9`
    )
      .then((r) => r.json())
      //   .then((gifs) => console.log(gifs))
      .then((gifs) => setGifs([...gifs.data.slice(0, 3)]));
  };
  return (
    <>
      <GifSearch onsubmitForm={handleSubmit} />
      <GifList gifs={gifs} />
    </>
  );
}

export default GifListContainer;
