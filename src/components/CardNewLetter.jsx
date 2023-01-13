import { Box, Typography } from "@mui/material";
import React from "react";

export default function CardNewLetter(props) {
  return (
    <Box sx={{
        boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        maxWidth:'320px',
        margin:'auto 1rem',
        textAlign:'center',
        fontFamily:'arial'
    }}>
      <img className="product--image" src={props.url} alt="product image" />
      <h4>{props.name}</h4>
      {/* <p className="price">{props.price}</p> */}
      <p>{props.description}</p>
        <button style={{
         "border": "none",
         "outline": "0",
         "padding": "5px",
         "color": "white",
         "backgroundColor": "#000",
         "textAlign": "center",
         "cursor": "pointer",
         "width": "100%",
         "fontSize": "18px",
        height:'35px'
        }} onClick={()=>console.log('resting')}>Read more...</button>
    </Box>
  );
}