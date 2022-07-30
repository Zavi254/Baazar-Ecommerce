import React, { useEffect, useState } from "react";
import AddButton from "./AddButton";

function Kids() {
  const [kidShoes, setKidShoes] = useState([]);
  const [count, setCount] = useState(0);

  const addItems = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    fetch("https://pacific-leaf-twig.glitch.me/kids-shoes")
      .then((response) => response.json())
      .then((data) => setKidShoes(data));
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center gap-5 mt-5">
      {kidShoes.map((shoe) => (
        <div key={shoe.id} className="card mt-5" style={{ width: "25rem" }}>
          <img src={shoe.img} className="card-img-top img-fluid" alt="A shoe" />
          <div className="card-body d-flex">
            <div>
              <h5 className="card-title">{shoe.name}</h5>
              <p className="card-text">{`Items Remaining ${shoe.itemsLeft}`}</p>
              <AddButton addItems={addItems} />
            </div>
            <div className="mx-auto align-self-center">
              <h4>{`$ ${shoe.price}`}</h4>
            </div>
          </div>
        </div>
      ))}
      <div className="counter">{`Items added in the Cart : ${count}`}</div>
    </div>
  );
}

export default Kids;
