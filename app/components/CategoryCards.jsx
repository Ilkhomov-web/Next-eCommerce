"use client";

import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FormControlSelect from "./FormControlSelect";
import ProductCard from "./ProductCard";

const CategoryCard = (prop) => {
  const { allProducts, setAllProducts, setCardStock, cardStock } = prop;

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <Box sx={{ margin: "40px 0px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">ALL Product</Typography>
        <FormControlSelect />
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {allProducts.map((product) => (
          <ProductCard
            key={product.id}
            data={product}
            setCardStock={setCardStock}
            cardStock={cardStock}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CategoryCard;
