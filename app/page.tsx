// app/page.tsx
"use client";

import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Haeding from "./components/Haeding";
import CategoryCard from "./components/CategoryCards";
import { Product } from "./types/ProductCard";
import { useState } from "react";

export default function Home() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  return (
    <main>
      <Container maxWidth="xl">
        <Navbar />
        <Haeding />
        <CategoryCard
          allProducts={allProducts}
          setAllProducts={setAllProducts}
        />
      </Container>
    </main>
  );
}
