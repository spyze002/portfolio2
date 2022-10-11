import { Typography, Box } from "@mui/material";
import LogoReact from '../Images/esum1.jpeg';

function Content() {
  return (
   <>
   <Box
   
   sx={{
    backgroundColor: '#0B021C'
   }}>
    
      <Box
   sx={{
    display: 'flex',
    backgroundColor: '#315BAB',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1280px',
    height: 500,
    mt: 6,


   }}>
 
    <Box
    component='img'
    src ={LogoReact}
    sx={{
      display: 'flex',
      width: 400,
      height: 500,
      opacity: 0.9,
      borderRadius: 10

    }}
   / >
    <Box
    component={'nav'}
    sx={{
      display: 'flex',
      fontSize: 80,
      color: '#fff',
      fontWeight: 'bold',

    }}
    

    >
      REACT FRONTEND DEVELOPER
    </Box>




   </Box>

   </Box>
   
   </>
  )
}

export default Content