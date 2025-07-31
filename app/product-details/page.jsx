"use client";

import React, { useEffect, useState } from "react";

const page = () => {
  const [cardStock, setCardStock] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cardStock")) || [];
    setCardStock(stored);
  }, []);

  const selectedCards = cardStock.filter((item) => item.basketItem > 0);

  return (
    <div>
      <h2 color="black">Savat</h2>
      {selectedCards.length === 0 ? (
        <p color="black">Savat bo‘sh</p>
      ) : (
        <ul>
          {selectedCards.map((item, index) => (
            <li key={index} color="black">
              Mahsulot ID: {item.id} | Soni: {item.basketItem}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default page;
