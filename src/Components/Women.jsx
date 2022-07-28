import React, { useEffect, useState } from "react";

function Women() {
  const [womenShoes, setWomenShoes] = useState([]);

  useEffect(() => {
    fetch("https://pacific-leaf-twig.glitch.me/women-shoes")
      .then((response) => response.json())
      .then((data) => setWomenShoes(data));
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center gap-5 mt-5">
      {womenShoes.map((shoe) => (
        <div key={shoe.id} className="card mt-5" style={{ width: "25rem" }}>
          <img src={shoe.img} className="card-img-top img-fluid" alt="A shoe" />
          <div className="card-body d-flex">
            <div>
              <h5 className="card-title">{shoe.name}</h5>
              <p className="card-text">{`Items Remaining ${shoe.itemsLeft}`}</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
            <div className="mx-auto align-self-center">
              <h4>{`$ ${shoe.price}`}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Women;
