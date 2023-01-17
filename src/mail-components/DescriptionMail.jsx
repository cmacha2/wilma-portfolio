import React from "react";

function DescriptionMail() {
  return (
    <tr>
      <td
        className="p20"
        bgcolor="#ffffff"
        style={{
          paddingBottom: 25,
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        <table
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          border={0}
          role="presentation"
        >
          <tbody>
            <tr>
              <td
                className="blue gmail-font-fix"
                align="left"
                style={{
                  fontFamily: "Calibri, Arial, Helvetica, sans-serif",
                  fontWeight: 300,
                  fontSize: 20,
                  msoTextRaise: 6,
                  color: "#333333",
                  marginTop: 0,
                  WebkitTextSizeAdjust: "none",
                  msTextSizeAdjust: "100%",
                  msoLineHeightRule: "at-least",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                <p>It’s a new year, and that means new possibilities.</p>
                <p>
                  For some, that might mean buying a house for the first time.
                  For existing homeowners, it could mean improving your current
                  space — or selling it to move on to a place that feels like a
                  better fit for your family.
                </p>
                <p>
                  Whatever your plans, setting small milestones can help you get
                  there. Are you ready to make those home-related goals a
                  reality this year?
                </p>
                {/* <a
                  data-oe-parent-type="READ_MORE"
                  target="_blank"
                  href="https://wilmaalvarez.myhomehq.biz/single-newsletter/get-tips-for-your-home-goals-in-2023"
                  style={{
                    color: "#ffffff",
                    display: "block",
                    fontFamily: "sans-serif",
                    fontSize: 13,
                    lineHeight: 34,
                    textAlign: "center",
                    textDecoration: "none",
                    WebkitTextSizeAdjust: "none",
                  }}
                >                </a> */}
                {/* Buttonnnn */}
                <table width={"100%"}>
                  <tbody>
                    <tr
                      className="read-more"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "24px 0 10px 0",
                      }}
                    >
                      <td
                        height={45}
                        style={{
                          backgroundColor: "#6066669e",
                          verticalAlign: "middle",
                          textAlign: "center",
                          width: 240,
                          display: "inline-block",
                          borderRadius: 30,
                          boxShadow: "10px 10px 5px -8px rgba(0,0,0,0.27)",
                          WebkitBoxShadow:
                            "10px 10px 5px -8px rgba(0,0,0,0.27)",
                          MozBoxShadow: "10px 10px 5px -8px rgba(0,0,0,0.27)",
                        }}
                      >
                        <a
                          data-oe-parent-type="READ_MORE"
                          target="_blank"
                          href="https://wilmaalvarez.myhomehq.biz/single-newsletter/get-tips-for-your-home-goals-in-2023"
                          style={{
                            // backgroundColor: "red",
                            color: "white",
                            fontWeight: 600,
                            fontSize: 15,
                            lineHeight: 3,
                            textDecoration: "none",
                            WebkitTextSizeAdjust: "none",
                          }}
                        >
                          Keep Reading
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* FInnnnnnnnn */}
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}

export default DescriptionMail;
