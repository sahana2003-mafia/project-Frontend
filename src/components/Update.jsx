import React, { useState } from "react";
import axios from "axios";

function Update() {
  const [msg, setMsg] = useState(null);
  const [product, setProduct] = useState({
    id: 0,
    name: '',
    qty: 0
  });

  const handlePut = async () => {
    try {
      const resp = await axios.put(`https://project-backend-1sg8.onrender.com/products/${product.id}`, {
        name: product.name,
        qty: product.qty
      });
      setMsg(resp.data.msg);
    } catch (e) {
      setMsg(e.message);
      console.log(e);
    }
  };

  return (
    <>
      <h1>Update Product</h1>
      <input
        type="text"
        value={product.id}
        onChange={(e) => setProduct({ ...product, id: e.target.value })}
        placeholder="Product ID"
      />
      <input
        type="text"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
        placeholder="Product Name"
      />
      <input
        type="text"
        value={product.qty}
        onChange={(e) => setProduct({ ...product, qty: e.target.value })}
        placeholder="Quantity"
      />
      <button onClick={handlePut}>Update</button>
      {msg && <p>{msg}</p>}
    </>
  );
}

export default Update;
