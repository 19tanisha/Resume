import React from "react";
import NavbarHeader from "../NavbarHeader";
import { useWindowDimensions } from "../../Constants/Constants";
import { GoPrimitiveDot } from "react-icons/go";
import "./Education.css";
import { Style } from "../../Constants/Styles.";
function Education() {
  const { width, height } = useWindowDimensions();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: width - 50,
        marginLeft: 20,
        marginTop: 30,
      }}
    >
      <NavbarHeader title={"Education"} />
      <div
        style={{
          ...Style.box,
          backgroundColor: "transparent",
          flexDirection: "column",
          padding: 0,
          backdropFilter: "none",
        }}
      >
        {/*--------------------------------------------------------------------------------------- */}

        <div
          style={{
            // padding: 10,
            ...Style.innerBox,
            // backgroundColor: " rgba(0,0,0,0.2)",
          }}
        >
          <a>
            <span
              style={{
                ...Style.eduHeader,
              }}
            >
              Current Education:
            </span>
            <span
              style={{
                ...Style.deg_name,
              }}
            >
              {" "}
              Bachelor Of Engineering, Computer Science(2019-2023)
            </span>

            <br />
            <span
              style={{
                color: "#F0A500",
                fontSize: 18,
              }}
            >
              Dhole Patil College of Engineering (SPPU)
            </span>

            <br />

            <span
              style={{
                ...Style.eduHeader,
                fontSize: 15,
              }}
            >
              Marks Obtained:
            </span>
            <br />
            <span style={{ fontSize: 18 }}>
              {" "}
              Second Year- 9.3 SGPA <br /> First Year- 8.7 SGPA
            </span>
          </a>
        </div>

        <div
          style={{
            ...Style.innerBox,
            // backgroundColor: " rgba(0,0,0,0.2)",
          }}
        >
          <a>
            <span
              style={{
                ...Style.eduHeader,
              }}
            >
              Senior Secondary(XII):
            </span>
            <span
              style={{
                ...Style.deg_name,
              }}
            >
              {" "}
              Higher Secondary, Computer (HSC-2019)
            </span>

            <br />
            <span
              style={{
                color: "#F0A500",
                fontSize: 18,
              }}
            >
              Nowrosjee Wadia College
            </span>

            <br />

            <span
              style={{
                ...Style.eduHeader,
                fontSize: 15,
              }}
            >
              Marks Obtained:
            </span>
            <br />
            <span style={{ fontSize: 18 }}> 64.80%</span>
          </a>
        </div>

        <div
          style={{
            ...Style.innerBox,
            // backgroundColor: " rgba(0,0,0,0.2)",
          }}
        >
          <a>
            <span
              style={{
                ...Style.eduHeader,
              }}
            >
              Secondary(X):
            </span>
            <span
              style={{
                ...Style.deg_name,
              }}
            >
              {" "}
              Secondary Education (SSC-2017)
            </span>

            <br />
            <span
              style={{
                color: "#F0A500",
                fontSize: 18,
              }}
            >
              Loreto Convent School
            </span>

            <br />

            <span
              style={{
                ...Style.eduHeader,
                fontSize: 15,
              }}
            >
              Marks Obtained:
            </span>
            <br />
            <span style={{ fontSize: 18 }}> 87.40%</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
