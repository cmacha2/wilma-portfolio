import React, { useState,useEffect,useRef } from "react";

function NavBarMail() {
  const [width, setWidth] = useState(0)
  const ref = useRef(null);
console.log(width)
  useEffect(() => {
    setWidth(ref.current ? ref.current.offsetWidth : 0)
  }, [ref.current]);


  return (
    < >
    <tr           ref={ref}>
      <td
        className="pr16"
        //   bgcolor="#515458"
        style={{
          // paddingRight: 24,
          display: "flex",
          justifyContent: "space-between",
          padding: "5px 10px 5px 10px",
          alignItems: "center",
        }}
      >
        <div>
          <img

          className="img-icons-navbar"
            src="https://res.cloudinary.com/cmacha2/image/upload/v1673898517/agent_logo_2_1623960051_vil0kl.jpg"
            width={ width >= 510 ? 230 : 150 }
            height={ width >= 510 ? 50 : 38 }
          />
        </div>
        <table
          cellPadding={0}
          cellSpacing={0}
          border={0}
          role="presentation"
          style={{
            display: "flex",
          }}
        >
          <tbody>
            <tr>
              <td
                style={{
                  borderRight: "1px solid #ffffff",
                }}
              >
                <table>
                  <tbody>
                    <tr>
                      <td
                        bgcolor="#686868"
                        style={{
                          background: "#686868",
                          border: "1px solid #ffffff",
                          borderRadius: "50%",
                        }}
                        width={40}
                        height={40}
                        valign="middle"
                        align="center"
                      >
                        <div align="center">
                          <a
                            data-oe-index={1}
                            data-oe-parent-type="SOCIAL_LINK_PROFILE_PAGE"
                            href="https://wilmaalvarez.myhomehq.biz/"
                            target="_blank"
                          >
                            {" "}
                            <img
                              src="https://res.cloudinary.com/cmacha2/image/upload/v1673802105/oe_logo_circle_cwvode.png"
                              alt="oe_logo_circle"
                              width={25}
                              height={25}
                              border={0}
                              className=""
                              style={{
                                outline: "none",
                                textDecoration: "none",
                                msInterpolationMode: "bicubic",
                                display: "block",
                                margin: 0,
                                border: 0,
                              }}
                            />{" "}
                          </a>
                        </div>{" "}
                      </td>
                      <td
                        bgcolor="#686868"
                        style={{
                          background: "#686868",
                          border: "1px solid #ffffff",
                          borderRadius: "50%",
                        }}
                        width={40}
                        height={40}
                        valign="middle"
                        align="center"
                      >
                        <div align="center">
                          <a
                            data-oe-index={1}
                            data-oe-parent-type="SOCIAL_LINK_WEBSITE"
                            href="https://www.empirerealtyfl.com/"
                            target="_blank"
                          >
                            {" "}
                            <img
                              src="https://res.cloudinary.com/cmacha2/image/upload/v1673802131/company_xhxc2g.png"
                              alt="company"
                              width={25}
                              height={25}
                              border={0}
                              className=""
                              style={{
                                outline: "none",
                                textDecoration: "none",
                                msInterpolationMode: "bicubic",
                                display: "block",
                                margin: 0,
                                border: 0,
                              }}
                            />{" "}
                          </a>
                        </div>{" "}
                      </td>
                      <td
                        bgcolor="#686868"
                        style={{
                          background: "#686868",
                          border: "1px solid #ffffff",
                          borderRadius: "50%",
                        }}
                        width={40}
                        height={40}
                        valign="middle"
                        align="center"
                      >
                        <div align="center">
                          <a
                            data-oe-index={1}
                            data-oe-parent-type="SOCIAL_LINK_LINKEDIN"
                            href="https://www.linkedin.com/in/wilma-alvarez-2624448"
                            target="_blank"
                          >
                            {" "}
                            <img
                              src="https://res.cloudinary.com/cmacha2/image/upload/v1673802150/linkedin_wegq1d.png"
                              alt="linkedin"
                              width={25}
                              height={25}
                              border={0}
                              className=""
                              style={{
                                outline: "none",
                                textDecoration: "none",
                                msInterpolationMode: "bicubic",
                                display: "block",
                                margin: 0,
                                border: 0,
                              }}
                            />{" "}
                          </a>
                        </div>{" "}
                      </td>
                      <td
                        bgcolor="#686868"
                        style={{
                          background: "#686868",
                          border: "1px solid #ffffff",
                          borderRadius: "50%",
                        }}
                        width={40}
                        height={40}
                        valign="middle"
                        align="center"
                      >
                        <div align="center">
                          <a
                            data-oe-index={1}
                            data-oe-parent-type="SOCIAL_LINK_FACEBOOK"
                            href="https://www.facebook.com/451563231627107"
                            target="_blank"
                          >
                            {" "}
                            <img
                              src="https://res.cloudinary.com/cmacha2/image/upload/v1673802163/facebook_tqiq0g.png"
                              alt="facebook"
                              width={25}
                              height={25}
                              border={0}
                              className=""
                              style={{
                                outline: "none",
                                textDecoration: "none",
                                msInterpolationMode: "bicubic",
                                display: "block",
                                margin: 0,
                                border: 0,
                              }}
                            />{" "}
                          </a>
                        </div>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>{" "}
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td
                style={{
                  borderRight: "1px solid #ffffff",
                }}
              >
                <table>
                  <tbody>
                    <tr>
                      <td
                        bgcolor="#686868"
                        style={{
                          background: "#686868",
                          border: "1px solid #ffffff",
                          borderRadius: "50%",
                        }}
                        width={40}
                        height={40}
                        valign="middle"
                        align="center"
                      >
                        <div align="center">
                          <a
                            data-oe-index={1}
                            data-oe-parent-type="SOCIAL_LINK_GOOGLE"
                            href="https://www.google.com/search?q=Wilma+Alvarez+-+Realtor%2C+Miami+Lakes+Drive%2C+Miami+Lakes%2C+FL&ludocid=52518146724753623#lrd=0x88d9a5e5878d7227:0xba94f9e7ca70d7,1"
                            target="_blank"
                          >
                            {" "}
                            <img
                              src="https://res.cloudinary.com/cmacha2/image/upload/v1673802181/plus_g96qut.png"
                              alt="plus"
                              width={25}
                              height={25}
                              border={0}
                              className=""
                              style={{
                                outline: "none",
                                textDecoration: "none",
                                msInterpolationMode: "bicubic",
                                display: "block",
                                margin: 0,
                                border: 0,
                              }}
                            />{" "}
                          </a>
                        </div>{" "}
                      </td>
                      <td
                        bgcolor="#686868"
                        style={{
                          background: "#686868",
                          border: "1px solid #ffffff",
                          borderRadius: "50%",
                        }}
                        width={40}
                        height={40}
                        valign="middle"
                        align="center"
                      >
                        <div align="center">
                          <a
                            data-oe-index={1}
                            data-oe-parent-type="SOCIAL_LINK_YELP"
                            href="https://www.yelp.com/biz/wilma-alvarez-empire-realty-of-florida-hialeah-2"
                            target="_blank"
                          >
                            {" "}
                            <img
                              src="https://res.cloudinary.com/cmacha2/image/upload/v1673802214/yelp_eslmpg.png"
                              alt="yelp"
                              width={25}
                              height={25}
                              border={0}
                              className=""
                              style={{
                                outline: "none",
                                textDecoration: "none",
                                msInterpolationMode: "bicubic",
                                display: "block",
                                margin: 0,
                                border: 0,
                              }}
                            />{" "}
                          </a>
                        </div>{" "}
                      </td>
                      <td
                        bgcolor="#686868"
                        style={{
                          background: "#686868",
                          border: "1px solid #ffffff",
                          borderRadius: "50%",
                        }}
                        width={40}
                        height={40}
                        valign="middle"
                        align="center"
                      >
                        <div align="center">
                          <a
                            data-oe-index={1}
                            data-oe-parent-type="SOCIAL_LINK_REALTOR"
                            href="https://www.realtor.com/realestateagents/wilma-alvarez___1193082_206999827"
                            target="_blank"
                          >
                            {" "}
                            <img
                              src="https://res.cloudinary.com/cmacha2/image/upload/v1673802225/realtor_cbqnl6.png"
                              alt="realtor"
                              width={25}
                              height={25}
                              border={0}
                              className=""
                              style={{
                                outline: "none",
                                textDecoration: "none",
                                msInterpolationMode: "bicubic",
                                display: "block",
                                margin: 0,
                                border: 0,
                              }}
                            />{" "}
                          </a>
                        </div>{" "}
                      </td>
                      <td
                        bgcolor="#686868"
                        style={{
                          background: "#686868",
                          border: "1px solid #ffffff",
                          borderRadius: "50%",
                        }}
                        width={40}
                        height={40}
                        valign="middle"
                        align="center"
                      >
                        <div align="center">
                          <a
                            data-oe-index={1}
                            data-oe-parent-type="SOCIAL_LINK_ZILLOW"
                            href="https://www.zillow.com/profile/user30313729"
                            target="_blank"
                          >
                            {" "}
                            <img
                              src="https://content.outboundengine.com/templates/V2/compressed/platform2/social-images/zillow.png"
                              alt="zillow"
                              width={25}
                              height={25}
                              border={0}
                              className=""
                              style={{
                                outline: "none",
                                textDecoration: "none",
                                msInterpolationMode: "bicubic",
                                display: "block",
                                margin: 0,
                                border: 0,
                              }}
                            />
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    </>
  );
}

export default NavBarMail;
