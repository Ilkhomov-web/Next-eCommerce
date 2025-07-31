import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import ChatIcon from "@mui/icons-material/Chat";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductCard = ({ data, cardStock, setCardStock }) => {
  const [addBasket, setAddBasket] = useState(false);

  const currentProduct = cardStock.find((item) => item.id === data.id);
  const currentCount = currentProduct ? currentProduct.cardItem : 0;

  const handleAddToBasket = () => {
    setAddBasket(true);

    setCardStock((prev) => {
      const exists = prev.find((item) => item.id === data.id);
      if (exists) {
        return prev.map((item) =>
          item.id === data.id
            ? {
                ...item,
                cardItem: item.cardItem + 1,
                basketItem: item.basketItem + 1,
                productdImg: data.thumbnail,
              }
            : item
        );
      } else {
        return [...prev, { id: data.id, cardItem: 1, basketItem: 1 }];
      }
    });
  };

  const handleRemoveFromBasket = () => {
    if (!currentProduct || currentProduct.cardItem === 0) return;

    setCardStock((prev) => {
      return prev
        .map((item) =>
          item.id === data.id
            ? {
                ...item,
                cardItem: item.cardItem - 1,
                basketItem: item.basketItem - 1,
              }
            : item
        )
        .filter((item) => item.cardItem > 0);
    });

    if (currentCount === 1) {
      setAddBasket(false);
    }
  };

  const discountedPrice =
    data.price - (data.price * data.discountPercentage) / 100;

  return (
    <Box
      sx={{
        boxShadow: "0px 0px 10px #ccc",
        width: "300px",
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      <Box component="img" src={data.thumbnail} width="100%" />
      <Typography variant="h6" color="black">
        {data.title.substring(0, 15) + "..."}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <StarIcon sx={{ color: "gold" }} />
        <Box sx={{ display: "flex", gap: "5px" }}>
          <ChatIcon sx={{ color: "gray" }} />
          {data.reviews.map((r, i) => (
            <Typography key={i} color="black">
              {r.rating}
            </Typography>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography sx={{ textDecoration: "line-through", color: "gray" }}>
            ${data.price.toFixed(2)}
          </Typography>
          <Typography sx={{ color: "#F38332" }} variant="h5">
            ${discountedPrice.toFixed(2)}
          </Typography>
        </Box>

        {addBasket ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Button
              sx={{ backgroundColor: "#0B76FF", color: "white" }}
              onClick={handleAddToBasket}
            >
              +
            </Button>
            <Typography color="black">{currentCount}</Typography>
            <Button
              sx={{ border: "1px solid #0B76FF", color: "#0B76FF" }}
              onClick={handleRemoveFromBasket}
            >
              -
            </Button>
          </Box>
        ) : (
          <Button
            onClick={handleAddToBasket}
            sx={{ backgroundColor: "#0B76FF", color: "white" }}
          >
            <ShoppingCartIcon />
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ProductCard;
