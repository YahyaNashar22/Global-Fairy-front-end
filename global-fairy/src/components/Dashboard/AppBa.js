// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import logo from '../../assets/images/logo.jpg';

// const DashboardAppBar = () => {
//   return (
//     <AppBar position="static" sx={{ backgroundColor: '#F9F1E8', color: '#374151',width:"100%" }}>
//       <Toolbar>
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <img src={logo} alt="logo" sx={{ width: 10, height: 10, marginRight: 2 }} />
//           <Typography variant="h4" component="div" sx={{ flexGrow: 1, textTransform: 'capitalize' }}>
//             dashboard admin
//           </Typography>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default DashboardAppBar;




import styles from "../../components/Dashboard/AppBar.module.css"
import logo from "../../assets/images/logo.jpg";





 const DashboardAppBar=()=> {
  return (
    <div className={styles.hed}>
        <div className={styles.title}>
          <img className={styles.logoImage} src={logo} alt="logo" />
          <p className="admin">dashbord admin </p>
        </div>
        
      </div>
  )
}
export default DashboardAppBar;
