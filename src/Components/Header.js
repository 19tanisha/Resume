import React from "react";
import SideBar from "./SideBar";
import "./Header.css";
import NavbarHeader from "./NavbarHeader";
import Education from "./NavbarComponents/Education";
import Skills from "./NavbarComponents/Skills";
import { Colors } from "../Constants/Colors";
function Header() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        zIndex: 1,
      }}
    >
      <SideBar />
      <div className="header">
        <div className="header__img">
          <img
            alt=""
            src="https://static.remove.bg/remove-bg-web/5cc729f2c60683544f035949b665ce17223fd2ec/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
            style={{ height: 250, width: 250, borderRadius: 200 }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <a
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 40,
              lineHeight: 1.1,
            }}
          >
            <span
              style={{
                // opacity: 1,
                color: Colors.red,
                // fontFamily: "Scheherazade New, serif",
              }}
            >
              Hey!
            </span>
            <img
              className="handwave"
              src={require("../assets/handwave.png")}
              style={{ height: 40, width: 40, position: "relative", top: 10 }}
            />
            <br />
            <span style={{ color: Colors.red }}>I'm{"  "}</span>
            Tanisha Thakur
          </a>
          <br />
          <a
            style={{
              color: Colors.red,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Computer engineering student, software <br />
            developer and a sports enthusiast...
          </a>
        </div>
      </div>
      <Education />
      <Skills />
      <NavbarHeader title={"Contac Me"} />
    </div>
  );
}

export default Header;
