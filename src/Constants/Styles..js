import React from "react";
const Style = {
  box: {
    display: "flex",
    backgroundColor: " rgba(255,255,255,0.05)",
    borderRadius: 20,
    justifContent: "center",
    padding: 10,
    overflowX: "hidden",
    width: "calc(100vw -200px)",
    backdropFilter: "blur(50px)",
  },
  eduHeader: {
    opacity: 0.5,
    fontSize: 18,
    textDecoration: "underline",
    fontFamily: "Merriweather Sans, sans-serif",
    fontWeight: "bold",
  },
  deg_name: {
    color: "#1A5F7A  ",
    fontSize: 18,
    fontFamily: "Merriweather Sans, sans-serif",
    fontWeight: "bold",
  },
  innerBox: {
    backgroundColor: " rgba(255,255,255,0.05)",
    marginBottom: 20,
    borderRadius: 10,
    display: "flex",
    padding: 10,
    width: "70%",
    maxWidth: 800,
    backdropFilter: "blur(50px)",
  },
  img_style: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 10,
  },
  skill_header: {
    opacity: 0.5,
    marginTop: 0,
    fontSize: 20,
    marginBottom: 0,
    marginLeft: 10,
    marginTop: 10,
  },
  skill_img: {
    height: 100,
    width: 100,
    objectFit: "contain",
  },
  skills_box: {
    backgroundColor: " rgba(0,0,0,0.1)",
    margin: 10,
    borderRadius: 10,
    display: "flex",
    padding: 10,
    // width: "35%",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "3px 3px 5px #0005",
    flexDirection: "row",
    // overflowX: "auto",
  },
};
export { Style };