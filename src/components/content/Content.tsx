import { Typography, Box } from "@mui/material";
import firstlogo from '../Images/background.png';
import SecondScreen from '../Images/esum2.png'

function Content() {
  return (
   <>
   <Box
   
   sx={{
    backgroundColor: '#0B021C'
   }}>
    
   <Box
   
   component = 'img'
   src= {firstlogo}
   sx={{
    display: 'flex',
    width: '100%',
    height: 600,
    opacity: 0.7

   }}
   />
      <Box
   
   sx= {{
    display: 'flex',
    width: '100%',
    height: 20,
    backgroundColor: '#000000'
   }}>
   </Box>

   <Box
    component = 'img'
    src= {SecondScreen}
    sx={{
     display: 'flex',
     width: '100%',
     height: 700,
     opacity: 0.7
 
    }}
   />



   </Box>
   
   </>
  )
}

export default Content