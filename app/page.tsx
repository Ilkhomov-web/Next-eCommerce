// app/page.tsx
"use client";

import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Haeding from "./components/Haeding";

export default function Home() {
  return (
    <main>
      <Container maxWidth="xl">
        <Navbar />
        <Haeding />
      </Container>
    </main>
  );
}
