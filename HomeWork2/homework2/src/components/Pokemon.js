import React, { useEffect, useState } from "react";
import axios from "axios";

const Pokemon = () => {
  const [data, setData] = useState();
  const [id, setId] = useState(1);

  useEffect(() => {
    axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        setData(response?.data);
      })
      .catch(() => {
        alert("Api not found");
      });
  }, [id]);

  const handlePre = () => {
    console.log(id);
    if (id <= 0) {
      setId(0);
    } else setId(id - 1);
    console.log(id);
  };
  const handleNext = () => {
    setId(id + 1);
  };

  return (
    <div>
      <div className="pokemon">
        <h1>Id: {data?.id}</h1>
        <h2>Name: {data?.name}</h2>
        <h3>Weight: {data?.weight}</h3>
        <img src={data?.sprites?.front_default} alt="" />
        <img src={data?.sprites?.back_default} alt="" />
      </div>
      <div className="button">
        <button onClick={handlePre}>Previous</button>
        <button onClick={handleNext}>Previous</button>
      </div>
    </div>
  );
};

export default Pokemon;
