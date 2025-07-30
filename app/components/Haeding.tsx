import React from "react";
import CustomSwiper from "./Swiper";
import { Box, Button, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const Haeding = () => {
  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "40px",
      }}
    >
      <Box sx={{ width: "80%", marginRight: "20px" }}>
        <CustomSwiper />
      </Box>
      <Box
        sx={{
          width: "20%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "200px",
            backgroundColor: "#E3F0FF",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            borderRadius: "12px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <PersonIcon
              sx={{
                color: "white",
                background: "#91B1E7",
                fontSize: "50px",
                padding: "10px",
                borderRadius: "50%",
              }}
            />
            <Typography variant="h6" width={"170px"} color="black">
              Hi, user let's get stated
            </Typography>
          </Box>
          <Button
            sx={{ background: "#0B76FF", color: "white", width: "170px" }}
          >
            Join now
          </Button>
          <Button
            sx={{ background: "white", color: "#0B76FF", width: "170px" }}
          >
            Log in
          </Button>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "180px",
            backgroundColor: "#F38332",
            padding: "20px",
            borderRadius: "12px",
            color: "white",
          }}
        >
          <Typography variant="h5">
            Get US $10 off with a new supplier
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "180px",
            backgroundColor: "#55BDC3",
            padding: "20px",
            borderRadius: "12px",
            color: "white",
          }}
        >
          <Typography variant="h5">
            Send quotes with supplier preferences
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Haeding;
