"use client";

import {
  AppBar,
  Box,
  Button,
  Container,
  List,
  ListItem,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Navbar() {
  return (
    <Box>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ borderBottom: "1px solid #e0e0e0" }}
      >
        <Toolbar>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              component={"img"}
              src={"/images/logo.png"}
              width={"100px"}
            ></Box>
            <Box
              sx={{
                width: "40%",
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                padding: "5px",
              }}
            >
              <TextField
                variant="outlined"
                placeholder="Search"
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                    },
                    "&:hover fieldset": {
                      border: "none",
                    },
                    "&.Mui-focused fieldset": {
                      border: "none",
                    },
                  },
                }}
              />

              <Button
                sx={{
                  width: "150px",
                  background: "orange",
                  color: "white",
                  height: "50px",
                }}
              >
                Search
              </Button>
            </Box>
            <Box sx={{ display: "flex", gap: "50px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "gray",
                }}
              >
                <PersonIcon />
                <Typography>Profile</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "gray",
                }}
              >
                <MessageIcon />
                <Typography>Message</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "gray",
                }}
              >
                <FavoriteIcon />
                <Typography>Orders</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "gray",
                }}
              >
                <ShoppingCartIcon />
                <Typography>My cart</Typography>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box>
        <List
          sx={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid #e0e0e0",
            gap: "10px",
          }}
        >
          <ListItem
            sx={{
              textAlign: "center",
              width: "150px",
              cursor: "pointer",
              transition: "background 0.4s",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                background: "orange",
                transition: "background 0.4s",
                color: "white",
              },
            }}
          >
            All category
          </ListItem>
          <ListItem
            sx={{
              textAlign: "center",
              width: "150px",
              cursor: "pointer",
              transition: "background 0.4s",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                background: "orange",
                transition: "background 0.4s",
                color: "white",
              },
            }}
          >
            Hot offers
          </ListItem>
          <ListItem
            sx={{
              textAlign: "center",
              width: "150px",
              cursor: "pointer",
              transition: "background 0.4s",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                background: "orange",
                transition: "background 0.4s",
                color: "white",
              },
            }}
          >
            Gift boxes
          </ListItem>
          <ListItem
            sx={{
              textAlign: "center",
              width: "150px",
              cursor: "pointer",
              transition: "background 0.4s",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                background: "orange",
                transition: "background 0.4s",
                color: "white",
              },
            }}
          >
            Projects
          </ListItem>
          <ListItem
            sx={{
              textAlign: "center",
              width: "150px",
              cursor: "pointer",
              transition: "background 0.4s",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                background: "orange",
                transition: "background 0.4s",
                color: "white",
              },
            }}
          >
            Menu item
          </ListItem>
          <ListItem
            sx={{
              textAlign: "center",
              width: "150px",
              cursor: "pointer",
              transition: "background 0.4s",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                background: "orange",
                transition: "background 0.4s",
                color: "white",
              },
            }}
          >
            Help
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
