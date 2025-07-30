import { Box, FormControl, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const FormControlSelect = () => {
  const [age, setAge] = useState("");

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <Box>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FormControlSelect;
