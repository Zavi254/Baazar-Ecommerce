import React, { useState } from "react";

function AddButton({ addItems }) {
  const [addToCart, setAddToCart] = useState(true);

  function addItem() {
    addItems();
    setAddToCart(!addToCart);
  }

  return (
    <button onClick={addItem} className="btn btn-primary">
      {addToCart ? "Add to Cart" : "Remove from the Cart"}
    </button>
  );
}

export default AddButton;