import { Typography, Box } from "@mui/material";
import LogoReact from '../Images/react.jpeg';

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
    width: '1280px',
    height: 500,
    mt: 6

   }}>
    <Box
    component='img'
    src ={LogoReact}
    sx={{
      display: 'flex',
      width: 500,
      height: 300,
    }}
    >

    </Box>

   </Box>

   </Box>
   
   </>
  )
}

export default Content