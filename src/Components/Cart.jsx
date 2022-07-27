import React, { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/men-shoes")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  console.log(cart);

  return (
    <div>
      {cart.map((item) => (
        <div>
          <img src={item.img} alt="Images of shoes" />
        </div>
      ))}
    </div>
  );
}
