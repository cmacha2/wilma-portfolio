import { Box, Typography } from "@mui/material";
import React from "react";
import Carousel from "../components/Carousel";
import SessionNewsLetter from "../components/SessionNewsLetter";
import Sales from "../components/Sales";
import SessionReviews from "../components/SessionReviews";


function Home() {
  return (
    <Box sx={{paddingBottom:5}} >
      {/* <Box sx={{width: "100%", height:460,backgroundImage:'url("https://res.cloudinary.com/cmacha2/image/upload/v1673057536/sx1dmzhR0AMPn00_UxJ_22-Zpzbi1xcrLcMj2y9b6UU_xm3p5g.jpg")',backgroundSize:'cover',backgroundPosition:"50% 47%",backgroundRepeat:'no-repeat'}}>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}} >
            <Box sx={{paddingY:'4rem'}}>
              <Typography variant='h2' color={'white'} sx={{fontSize:'5em',fontWeight:300,marginTop:"80px"}}>Welcome</Typography>
              <Typography variant='h6' color={'white'} sx={{fontSize:"1.6rem",marginBottom:'120px',paddingTop:'15px'}}> Thanks you for stopping by</Typography>
            </Box>
        </Box>
      </Box> */}
      <Carousel/>
      <Box container>
        <Box sx={{display:"flex",justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <Box sx={{position:'relative',bottom:120}}>
              <img src='https://res.cloudinary.com/cmacha2/image/upload/v1673141632/personalpic_h01tt3.jpg' style={{borderRadius:'50%',border:'3px solid #fff',width:180,height:180}}/>
            </Box>
            <Box sx={{position:'relative',bottom:80,textAlign:"center",display:"flex",justifyContent:'center',alignItems:'center',flexDirection:'column',gap:5,paddingTop:5}}>
              <Typography variant="h5" >Wilma Alvarez </Typography>
              <Typography variant="h5">Empire Realty of Florida, Inc</Typography>
              <img style={{width:233,height:100}} src={'https://res.cloudinary.com/cmacha2/image/upload/v1673573252/czbUxZG_5ssXRva0Hn6CDr5da09GEyRCjMTDf4PrPZA_ioryzo.png'} />
            </Box>
            <Box sx={{display:'flex',paddingX:3,gap:5,justifyContent:'center',alignItems:'center',flexDirection:'column',}}>
              <Box sx={{display:"flex",justifyContent:'center',alignItems:'center',flexDirection:'column',width:'70%',marginLeft:'auto',marginRight:'auto',gap:5,textAlign:'center'}}>
                <Typography variant="h4">My Background</Typography>
                <Typography variant="h6" >Hello and welcome! Thank you so much for exploring these pages of my website. I hope you find the content here useful and informative. I've been in this business for a while now and helping you make the best possible decisions is my number one priority.</Typography>
                <Typography variant="h6" >Whether you've found this website of mine through an email, social media channels, or you were referred here by a friend, I'm happy to have you as my guest.</Typography>
                <Typography variant="h6" >If you need to get in touch, my contact information is at the bottom of each page. Thanks for visiting and enjoy!</Typography>
              </Box>
              <Box sx={{}}>
                <Sales/>
              </Box>
            </Box>
        </Box>
      </Box>
      <Box>
        <Box>
          <SessionNewsLetter/>
        </Box>
        <Box>
          <SessionReviews/>
        </Box>
        <Box></Box>
        <Box></Box>
      </Box>
    </Box>
  );
}

export default Home;
