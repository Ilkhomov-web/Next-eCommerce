// app/page.tsx
"use client";

import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Haeding from "./components/Haeding";
import CategoryCard from "./components/CategoryCards";

export default function Home() {
  return (
    <main>
      <Container maxWidth="xl">
        <Navbar />
        <Haeding />
        <CategoryCard />
      </Container>
    </main>
  );
}
