import { Paper, Box, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Legend);

const PieChart = () => {
  const data = {
    labels: ["Shoes", "Clothes", "Makeup"],
    datasets: [
      {
        data: [5, 5, 7],
        backgroundColor: ["#D81A84", "#85255B", "#F9F1E8"],
      },
    ],
  };
  const options = {};
  return (
    <Paper
      elevation={3}
      sx={{
        width: 560,
        height: 400,
        borderRadius: 8,
      }}
    >
      <Box
        sx={{
          width: "90%",
          height: "80%",
          marginRight: "auto",
          marginLeft: "auto",
          paddingTop: "1rem",
        }}
      >
        <Typography sx={{}}>Category</Typography>

        <Pie data={data} options={options} />
        <Box></Box>
      </Box>
    </Paper>
  );
};
export default PieChart;
