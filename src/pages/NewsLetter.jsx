import React from "react";
import Blur from "react-blur";

function Newsletter() {
  return (
    <div
      style={{
        backgroundColor: "gray",
        maxWidth: "650px",
        // display: "flex",
        margin: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <img
            src="https://content.outboundengine.com/uploads/original/100025/czbUxZG_5ssXRva0Hn6CDr5da09GEyRCjMTDf4PrPZA.png"
            style={{ width: 170 }}
          />
        </div>
        <div style={{ display: "flex", gap: 5, paddingRight: "1rem" }}>
          <img
            src="https://res.cloudinary.com/cmacha2/image/upload/v1673802105/oe_logo_circle_cwvode.png"
            width={35}
            height={35}
          />
          <img
            src="https://res.cloudinary.com/cmacha2/image/upload/v1673802131/company_xhxc2g.png"
            width={35}
            height={35}
          />
          <img
            src="https://res.cloudinary.com/cmacha2/image/upload/v1673802150/linkedin_wegq1d.png"
            width={35}
            height={35}
          />
          <img
            src="https://res.cloudinary.com/cmacha2/image/upload/v1673802163/facebook_tqiq0g.png"
            width={35}
            height={35}
          />

          <img
            src="https://res.cloudinary.com/cmacha2/image/upload/v1673802181/plus_g96qut.png"
            width={35}
            height={35}
          />
          <img
            src="https://res.cloudinary.com/cmacha2/image/upload/v1673802214/yelp_eslmpg.png"
            width={35}
            height={35}
          />
          <img
            src="https://res.cloudinary.com/cmacha2/image/upload/v1673802225/realtor_cbqnl6.png"
            width={35}
            height={35}
          />
          <img
            src="https://res.cloudinary.com/cmacha2/image/upload/v1673802241/zillow_qaldhp.png"
            width={35}
            height={35}
          />
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            height: "400px",
            backgroundImage:
              'url("https://res.cloudinary.com/cmacha2/image/upload/v1673803345/home_gfpyua.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "50% 67%",
            justifyContent:'center',
            alignItems:'flex-end',
            paddingBottom:'50px',
          }}
        >
            <div
              style={{
                backdropFilter:'blur(10px)',
                display: "flex",
                height: "30%",
                // justifyContent: "flex-end",
                alignItems: "center",
                gap: 10,
                padding:'0 10px 0 10px'
              }}
            >
              <img
                src="https://res.cloudinary.com/cmacha2/image/upload/v1673141632/personalpic_h01tt3.jpg"
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  border: "2px solid #fff",
                  
                }}
              />
              <h2 style={{ color: "#fff" }}>
                Get Tips For your Home Hoals in 2023
              </h2>
            </div>
        </div>
      </div>
      <div style={{height:'100px'}}>
        <div>

        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div>

      </div>
    </div>
  );
}


export default Newsletter;
