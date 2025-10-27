import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState(null);
  const [msg, setMsg] = useState(null);

  const handleGet = async () => {
    try {
      const resp = await axios.get("https://project-backend-1sg8.onrender.com/products");
      setData(resp.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <>
      <h1>Products List</h1>
      {data ? (
        data.map((d) => (
          <h2 key={d.id}>
            Product ID: {d.id} — {d.name} (Quantity: {d.qty})
          </h2>
        ))
      ) : (
        <h2>No data loaded</h2>
      )}
      {msg && <p>{msg}</p>}
    </>
  );
}

export default Home;
