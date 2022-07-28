import React, { useEffect, useState } from "react";

function Men() {
  const [menShoes, setMenShoes] = useState([]);

  useEffect(() => {
    fetch("https://pacific-leaf-twig.glitch.me/men-shoes")
      .then((response) => response.json())
      .then((data) => setMenShoes(data));
  }, []);

  console.log(menShoes);

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

export default Men;
