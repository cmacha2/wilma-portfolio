import React from "react";
import { Box, Typography } from "@mui/material";
import ReactStars from "react-rating-stars-component";

const CardReview = ({review}) => {
  return (
    <Box
      sx={{
        width: "500px",
        height: "auto",
        border: "1px solid #a7a6a6",
        // backgroundColor: "green",
      }}
    >
      <Box sx={{ display: "flex", paddingLeft: 2, paddingY: 2 , flexDirection:'row',gap:5}}>
        <img src={review.review_url_img_web} width={80}/>
        <ReactStars
        value={review.rating}
        size={24}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
         />
      </Box>
      <Box sx={{ paddingX: 2 }}>
        <Typography variant="subtitle2">{review.review}</Typography>
      </Box>
      <Box sx={{ paddingY: 2 }}>
        <Typography variant="body1">{`${review.first_name?review.first_name:''} - ${review.city?review.city:''}, ${review.state?review.state:''}`}</Typography>
        <Typography variant="body1">{`${review.date}`}</Typography>
      </Box>
    </Box>
  );
};

export default CardReview;
