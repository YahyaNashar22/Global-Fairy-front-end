import { Box, Typography, Paper } from "@mui/material";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, Legend } from "chart.js";

ChartJS.register(LineElement, CategoryScale ,Legend);

const LineChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May","august" ],
    datasets: [
      {
        label: "Sales of the year",
        data: [7,9,3,5,0,6],
        backgroundColor: "#F9F1E8",
        borderColor: "#D81A84",
        pointBorderColor: "#85255B",
        fill:true,
        tension: 0.4,
      },
    ],
  };
  const options = {
    plugins: {
      legend: true,
    },
  };
  return (
    <Paper
    elevation={3}
      sx={{
        width: 700,
        height: 350,
        borderRadius: 8
        }}>
      <Box
       sx={{
        width: "90%",
        height: "90%",
        marginRight: "auto",
        marginLeft: "auto",
        paddingTop:"0.9rem"
       
      }}>
        <Typography>Sales of the last 6 month</Typography>
        <Line data={data} options={options}></Line>
      </Box>
    </Paper>
  );
};
export default LineChart;
