"use client";

import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Haeding from "./components/Haeding";
import CategoryCard from "./components/CategoryCards";
import { useState, useActionState } from "react";

export default function Home() {
  const [allProducts, setAllProducts] = useActionState(() => [], []);
  const [cardStock, setCardStock] = useState(0);

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
