import React from "react";
import NavbarHeader from "../NavbarHeader";
import { useWindowDimensions } from "../../Constants/Constants";
import "./Skills.css";
import { Style } from "../../Constants/Styles.";
import SkillsComponents from "./SkillsComponents";
function Skills() {
  const { width, height } = useWindowDimensions();

  return (
    <div
      style={{
        width: width - 50,
        display: "flex",
        flexDirection: "column",
        marginLeft: 20,
        marginTop: 50,
      }}
    >
      <NavbarHeader title={"Skills"} />
      <div
        style={{
          ...Style.box,
          flexDirection: "column",
          // margin: 10,
        }}
      >
        <a
          style={{
            ...Style.skill_header,
          }}
        >
          Technical Skills
        </a>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingInline: 20,
            // width: width - 150,
            overflowX: "auto",
          }}
        >
          {/* <SkillsComponents src = {require("../../assets/html.png")} title = "HTML"/> */}
          <SkillsComponents
            src={require("../../assets/react-native.png")}
            title={"ReactJs"}
          />
          <SkillsComponents
            src={require("../../assets/flutter.png")}
            title="Flutter"
          />
          <SkillsComponents src={require("../../assets/css.png")} title="CSS" />
          <SkillsComponents
            src={require("../../assets/react-native.png")}
            title="React-Native"
          />

          <SkillsComponents
            src={require("../../assets/firebase.png")}
            title="Firebase"
          />
          <SkillsComponents
            src={require("../../assets/mongodb.png")}
            title="MongoDB"
          />
          <SkillsComponents
            src={require("../../assets/node.png")}
            title="Node"
          />
          <SkillsComponents
            src={require("../../assets/python.png")}
            title="Python"
          />
          <SkillsComponents
            src={require("../../assets/javascript.png")}
            title="Javascript"
          />
        </div>
      </div>
      <div
        style={{
          // width: width - 50,
          ...Style.box,
          flexDirection: "column",
          marginBottom: 20,
          marginTop: 30,
        }}
      >
        <a
          style={{
            ...Style.skill_header,
          }}
        >
          Designing Skills
        </a>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingInline: 20,
            width: width,
            overflowX: "auto",
          }}
        >
          <SkillsComponents
            src={require("../../assets/figma.png")}
            title="Figma"
          />

          <SkillsComponents
            src={require("../../assets/photoshop.png")}
            title="Adobe Photoshop"
          />
          <SkillsComponents
            src={require("../../assets/lightroom.png")}
            title="Adobe Lightroom"
          />
        </div>
      </div>
      <div style={{ width: width - 80, ...Style.box, flexDirection: "column" }}>
        <a
          style={{
            ...Style.skill_header,
          }}
        >
          Soft Skills
        </a>
        <div style={{ display: "flex", padding: 5, overflowX: "auto" }}>
          {" "}
          <a
            style={{
              ...Style.skills_box,
            }}
          >
            Communication
          </a>
          <a style={{ ...Style.skills_box }}>Communication</a>
          <a style={{ ...Style.skills_box }}>Adaptability</a>
          <a style={{ ...Style.skills_box }}>Visual Thinking</a>
          <a style={{ ...Style.skills_box }}>Creativity </a>
          <a style={{ ...Style.skills_box }}>Enthusiasm</a>
          <a style={{ ...Style.skills_box }}>Colaboration</a>
          <a style={{ ...Style.skills_box }}>Leadership</a>
          <a style={{ ...Style.skills_box }}>Negotiations</a>
          <a style={{ ...Style.skills_box }}>Patience</a>
          <a style={{ ...Style.skills_box }}>Time Management</a>
        </div>
      </div>
    </div>
  );
}

export default Skills;
