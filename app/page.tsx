// app/page.tsx
"use client";

import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Swiper from "./components/Swiper";

export default function Home() {
  return (
    <main>
      <Container maxWidth="xl">
        <Navbar />
        <Swiper />
      </Container>
    </main>
  );
}
