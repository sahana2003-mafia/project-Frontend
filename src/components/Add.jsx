import React, { useState } from "react";
import axios from "axios";

function Add() {
  const [msg, setMsg] = useState(null);
  const [product, setProduct] = useState({
    id: 0,
    name: '',
    qty: 0
  });

  const handlePost = async () => {
    try {
      const resp = await axios.post("https://project-backend-1sg8.onrender.com/products", product);
      setMsg(resp.data.msg);
    } catch (e) {
      setMsg(e.message);
      console.log(e);
    }
  };

  return (
    <>
      <h1>Add New Product</h1>
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
      <button onClick={handlePost}>Add</button>
      {msg && <p>{msg}</p>}
    </>
  );
}

export default Add;
