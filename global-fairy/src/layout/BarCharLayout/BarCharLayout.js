import { useState } from "react";
import BarChart from "../../components/charts/BarChart";
import {Box , Paper , Typography} from "@mui/material";

function Bar() {
  const BrandData = [
    {
      name: "NYX",
      category: ["Shoes", "Clothes", "Makeup"],
    },
    {
      name: "Za",
      category: ["Shoes", "Clothes", "Makeup"],
    },
    {
      name: "Shein",
      category: ["Shoes", "Clothes", "Makeup"],
    },
    {
      name: "Nike",
      category: ["Shoes", "Clothes", "Makeup"],
    },
    {
      name: "Adidas",
      category: ["Shoes", "Clothes", "Makeup"],
    },
    {
      name: "H&M",
      category: ["Shoes", "Clothes", "Makeup"],
    },
    {
      name: "MANGO",
      category: ["Shoes", "Clothes", "Makeup"],
    },
    {
        name: "MA",
        category: ["Shoes", "Clothes", "Makeup"],
      },
      {
        name: "GO",
        category: ["Shoes", "Clothes", "Makeup"],
      },
      {
        name: "G",
        category: ["Shoes", "Clothes", "Makeup"],
      },
  ];
  const [brandData, setBrandData] = useState({
    labels: BrandData.map((data) => data.name),
    datasets: [
      {
        label: "Brand",
        data: [0, 20, 40, 60, 80],
        backgroundColor: ['#D96093'] ,
      },
    ],
  });

  return (
    
      <Paper elevation={3} sx={{ width:700, height:400,marginLeft:"2rem" , borderRadius:8}}>
        
        <Box sx={{width:"90%", height:"80%" , marginRight:"auto" ,marginLeft:"auto" , }}>
        <Typography sx={{padding:"1rem"}}>Brand</Typography>
          <BarChart chartData={brandData} />
        </Box>
      </Paper>
   
  );
}

export default Bar;
