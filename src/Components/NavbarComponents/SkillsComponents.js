import React from "react";
import { Style } from "../../Constants/Styles.";

function SkillsComponents({ src, title }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 150,
      }}
    >
      {" "}
      <div
        style={{
          ...Style.img_style,
        }}
      >
        <img
          src={src}
          style={{
            ...Style.skill_img,
          }}
          className="skill_image"
        />
        <a style={{ fontSize: 18 }}>{title}</a>
      </div>
    </div>
  );
}

export default SkillsComponents;
