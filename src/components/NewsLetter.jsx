import "../App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./CardNewLetter";
import { productData, responsive } from "../data";

export default function NewsLetter() {
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
      <h1>React multi carousel</h1>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}