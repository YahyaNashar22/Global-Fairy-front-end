import React from "react";
import { Box, Typography } from "@mui/material";
import Sidebar from "../../components/Dashboard/SideBar.js";
import ChartLayout from "../../layout/ChartsLayout/ChartsLayout.js";

const App = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "0.5" }}>
      <Box>
        <Sidebar />
      </Box>
      <Box>
        <Typography
          sx={{ padding: "2rem", fontSize: "20px", fontWeight: "bold" }}
        >
          Dashboard
        </Typography>
        <ChartLayout />
      </Box>
    </Box>
  );
};

export default App;
