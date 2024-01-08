import { Box, Paper, Typography, Rating, Stack } from "@mui/material";

const Feedback = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: 560,
        height: 350,
        borderRadius: 8,
      }}
    >
      <Typography sx={{paddingTop:"1rem", paddingLeft:"1rem"}}>Customer Feedback</Typography>
      <Box  sx={{display:"flex", justifyContent:"center", gap:"1rem",paddingTop:"4rem"}}>
        <Box>
          <Paper sx={{width:214 , height:169,display:"flex", flexDirection:"column", alignItems:"center", borderRadius:8 , backgroundColor:"#D81A84",paddingTop:"1rem"}}>
            <Typography sx={{color:"#ffffff" , fontSize:"3rem"}}>4.9</Typography>
            <Stack spacing={1} >
              <Rating name="half-rating" defaultValue={4.5} precision={0.5} sx={{ color:"#85255B"}}/>
              <Typography sx={{paddingLeft:"0.5rem" , color:"#ffffff"}}>1.580 Ratings</Typography>
            </Stack>
          </Paper>
        </Box>


         
        <Box>
          <Paper sx={{width:214 , height:169, borderRadius:8  ,backgroundColor:"#85255B"}}>
          <Stack spacing={1} sx={{paddingLeft:"3rem", paddingTop:"0.5rem"}} >
            <Rating name="half-rating" defaultValue={4.5} precision={0.5} sx={{ color:"#ffffff"}}/>
              <Rating name="half-rating" defaultValue={4} precision={1} sx={{ color:"#ffffff"}}/>
              <Rating name="half-rating" defaultValue={3.5} precision={1.5} sx={{ color:"#ffffff"}}/>
              <Rating name="half-rating" defaultValue={2.5} precision={1.2} sx={{ color:"#ffffff"}}/>
              <Rating name="half-rating" defaultValue={1} precision={0.5} sx={{ color:"#ffffff"}}/>

            </Stack>
            </Paper>
        </Box>
      </Box>
    </Paper>
  );
};

export default Feedback;
