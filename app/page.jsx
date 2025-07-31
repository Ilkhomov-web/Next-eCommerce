"use client";

import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Haeding from "./components/Haeding";
import CategoryCard from "./components/CategoryCards";
import { useState, useActionState, useEffect } from "react";

export default function Home() {
  const [allProducts, setAllProducts] = useState([]);
  const [cardStock, setCardStock] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cardStock");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cardStock", JSON.stringify(cardStock));
  }, [cardStock]);

  return (
    <main>
      <Container maxWidth="xl">
        <Navbar cardStock={cardStock} />
        <Haeding />
        <CategoryCard
          cardStock={cardStock}
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          setCardStock={setCardStock}
        />
      </Container>
    </main>
  );
}
