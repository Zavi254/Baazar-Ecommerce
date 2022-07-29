import React, { useEffect, useState } from "react";

function Women() {
  const [womenShoes, setWomenShoes] = useState([]);
  const [count, setCount] = useState(0);
  const [addToCart, setAddToCart] = useState(true)

  const addItems = () => {
    setCount(count + 1)
    setAddToCart(!addToCart)
  }
  


  useEffect(() => {
    fetch("https://pacific-leaf-twig.glitch.me/women-shoes")
      .then((response) => response.json())
      .then((data) => setWomenShoes(data));
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center gap-5 mt-5">
      {womenShoes.map((shoe, index) => (
        <div key={index} className="card mt-5" style={{ width: "25rem" }}>
          <img src={shoe.img} className="card-img-top img-fluid" alt="A shoe" />
          <div className="card-body d-flex">
            <div>
              <h5 className="card-title">{shoe.name}</h5>
              <p className="card-text">{`Items Remaining ${shoe.itemsLeft}`}</p>
              <button key={index} onClick={addItems} className="btn btn-primary">{addToCart ? "Add to Cart" : "Remove from the Cart"}</button>
            </div>
            <div className="mx-auto align-self-center">
              <h4>{`$ ${shoe.price}`}</h4>
            </div>
          </div>
        </div>
      ))}
         <div className="counter">{`Items: ${count}`}</div>
    </div>
  );
}

export default Women;
