import React, { useState } from "react";

function GifSearch({ onsubmitForm }) {
  const [searchData, setSearchData] = useState("");
  const handleChange = (e) => {
    let search = e.target.value;
    setSearchData(search);
  };

  const submitForm = (event) => {
    event.preventDefault();
    onsubmitForm(searchData);
  };
  return (
    <form onSubmit={submitForm}>
      <p>Enter search term: </p>
      <input type="text" onChange={handleChange} />
      <input type="submit" value={"Find Gifs"} />
    </form>
  );
}
export default GifSearch;
