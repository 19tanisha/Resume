import React from "react";

function NavbarHeader({ title }) {
  return (
    <div
      style={{
        marginBottom: 15,
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
      }}
    >
      <a
        style={{
          fontSize: 28,
          fontWeight: "bold",
          fontFamily: "Merriweather Sans, sans-serif",
          textShadow: "-1px 1px 10px rgba(0, 0, 0, 0.75)",
          textAlign: "left",
          // marginLeft: 20,
        }}
      >
        {title}
      </a>
    </div>
  );
}

export default NavbarHeader;
