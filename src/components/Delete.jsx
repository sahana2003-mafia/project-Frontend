import React, { useState } from "react";
import axios from "axios";

function Delete() {
  const [msg, setMsg] = useState(null);
  const [product, setProduct] = useState({ id: 0 });

  const handleDelete = async () => {
    try {
      const resp = await axios.delete(`https://project-backend-1sg8.onrender.com/products/${product.id}`);
      setMsg(resp.data.msg);
    } catch (e) {
      setMsg(e.message);
      console.log(e);
    }
  };

  return (
    <>
      <h1>Delete Product</h1>
      <input
        type="text"
        value={product.id}
        onChange={(e) => setProduct({ ...product, id: e.target.value })}
        placeholder="Product ID"
      />
      <button onClick={handleDelete}>Delete</button>
      {msg && <p>{msg}</p>}
    </>
  );
}

export default Delete;
