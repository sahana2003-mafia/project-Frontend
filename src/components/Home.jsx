import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState(null);
  const [msg, setMsg] = useState(null);

  const handleGet = async () => {
    try {
      const resp = await axios.get("https://project-backend-1sg8.onrender.com/products");
      setData(resp.data);
      setMsg("✅ Products loaded successfully!");
    } catch (e) {
      console.error(e);
      setMsg("❌ Failed to load products. Please check the server.");
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Products List</h1>

      {msg && <p>{msg}</p>}

      {data && data.length > 0 ? (
        data.map((d) => (
          <h2 key={d.id}>
            Product ID: {d.id} — {d.name} (Quantity: {d.qty})
          </h2>
        ))
      ) : (
        <h2>No data loaded</h2>
      )}
    </div>
  );
}

export default Home;
