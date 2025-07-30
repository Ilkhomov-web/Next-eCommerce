import { Box, Button, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import ChatIcon from "@mui/icons-material/Chat";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Product } from "../types/ProductCard";

interface Props {
  data: Product;
}

const ProductCard = ({ data }: Props) => {
  const discountedPrice =
    data.price - (data.price * data.discountPercentage) / 100;

  return (
    <Box
      sx={{
        boxShadow: "0px 0px 10px #ccc",
        width: "300px",
        padding: "20px",
        borderRadius: "12px",
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 0px 15px #aaa",
          cursor: "pointer",
        },
      }}
    >
      <Box component={"img"} src={data.thumbnail} width={"100%"}></Box>
      <Typography variant="h6">{data.title}</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <StarIcon sx={{ color: "gold" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "5px",
            gap: "5px",
          }}
        >
          <ChatIcon />
          {data.reviews.map((review, index) => (
            <Typography key={index}>{review.rating}</Typography>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            sx={{ textDecoration: "line-through", color: "gray" }}
            variant="h6"
          >
            ${data.price.toFixed(2)}
          </Typography>
          <Typography sx={{ color: "#F38332" }} variant="h5">
            ${discountedPrice.toFixed(2)}
          </Typography>
        </Box>
        <Button sx={{ backgroundColor: "#0B76FF", color: "white" }}>
          <ShoppingCartIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;
