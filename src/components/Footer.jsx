import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Button, TextField, Typography } from "@mui/material";

// const FooterWrapper = styled.footer`
//   position: fixed;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background-color: #333;
//   color: #fff;
//   padding: 20px;

//   p {
//     margin: 0;
//   }

//   ul {
//     display: flex;
//     list-style: none;
//     margin: 0;
//     padding: 0;

//     li {
//       margin-right: 20px;

//       a {
//         color: #fff;
//       }

//       svg {
//         width: 25px;
//         height: 25px;
//       }
//     }
//   }
// `;

const navItems = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "NewsLetters",
    link: "/newsletter",
  },
  {
    name: "Review",
    link: "/review",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Property Search",
    link: "/property-search",
  },
];

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        bottom: 0,
        left: 0,
        right: 0,
        height: "23%",
        background:'#62af9e'
      }}
    >
      <Box sx={{flex: 4, paddingX: 4, paddingY: 3 }}>
        <Box>
        <Typography variant="body2">Wilma Alvarez</Typography>
        <Typography variant="body2">Real Estate Broker</Typography>
        <Typography variant="body2">Empire Realty of Florida, Inc</Typography>
        <a style={{ textDecoration: "none" }} href="www.empirerealtyfl.com">
          www.empirerealtyfl.com
        </a>
        </Box>
        <Typography variant="body2">7900 Oak Lane, Suite 400,</Typography>
        <Typography variant="body2">Miami Lakes, FL 33016 USA</Typography>
        <Typography variant="body2">Mobile: (305) 812-2020</Typography>

        <Typography variant="body2">
          <a
            style={{ textDecoration: "none" }}
            href="mailto:wilma@empirerealtyfl.com"
          >
            wilma@empirerealtyfl.com
          </a>
        </Typography>
      </Box>

      <Box
        sx={{
          flex: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: 3,
        }}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.link}
            style={{ color: "#000", textDecoration: "none", fontSize: 17 }}
          >
            {item.name}
          </Link>
        ))}
      </Box>
      <Box sx={{ flex: 3, paddingRight:5 , paddingY: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end", paddingY: 1 }}>
        <Typography variant="body1" sx={{}}>
          Don't miss our updates and latest news
        </Typography>
          <TextField
            id="outlined-basic"
            label="Your Email"
            variant="outlined"
          />

          <Button variant="contained">Contained</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
