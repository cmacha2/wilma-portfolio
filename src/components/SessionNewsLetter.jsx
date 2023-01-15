import "../App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./CardNewLetter";
import { productData, responsive } from "../data";
import { Typography } from "@mui/material";

export default function SessionNewsLetter() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="card-container" style={{
        maxWidth:'1280px',
        margin: '0 auto',
        padding:'1rem',
        textAlign:'center'
    }}>
      <Typography variant='h4' sx={{paddingY:5}}>NewsLetters</Typography>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}