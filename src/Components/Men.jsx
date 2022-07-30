import React, { useEffect, useState } from "react";
import AddButton from "./AddButton";

function Men() {
  const [menShoes, setMenShoes] = useState([]);
  const [count, setCount] = useState(0);

  const addItems = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    fetch("https://pacific-leaf-twig.glitch.me/men-shoes")
      .then((response) => response.json())
      .then((data) => setMenShoes(data));
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center gap-5 mt-5">
      {menShoes.map((shoe) => (
        <div key={shoe.id} className="card mt-5" style={{ width: "400px" }}>
          <img
            src={shoe.img}
            className="card-img-top"
            alt="A shoe"
            style={{ width: "100%" }}
          />
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

export default Men;
