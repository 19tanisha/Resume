import React, { useState } from "react";
import "./SideBar.css";
import { useWindowDimensions } from "../Constants/Constants";
import { GiSkills, GiDiamondTrophy } from "react-icons/gi";
import { FcGraduationCap } from "react-icons/fc";
import { RiUserStarFill } from "react-icons/ri";
import { IoMdContacts } from "react-icons/io";
import { MdEmojiSymbols } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";

function SideBar() {
  const [hover, setHover] = useState("");
  const { width, height } = useWindowDimensions();
  return (
    <>
      {width > 1076 ? (
        <div className="sidebar">
          <a
            onMouseEnter={() => setHover("Education")}
            onMouseOut={() => setHover("")}
            style={{
              borderRadius: hover === "Education" ? 5 : null,
              boxShadow:
                hover === "Education"
                  ? "4px 4px 5px #0007, -2px -2px 5px #fff3"
                  : null,
            }}
            className="options"
          >
            Education
          </a>
          <a
            className="options"
            onMouseEnter={() => setHover("Skills")}
            onMouseOut={() => setHover("")}
            style={{
              borderRadius: hover === "Skills" ? 5 : null,
              boxShadow:
                hover === "Skills"
                  ? "4px 4px 5px #0007, -2px -2px 5px #fff3"
                  : null,
            }}
          >
            Skills
          </a>
          <a
            className="options"
            onMouseEnter={() => setHover("Projects")}
            onMouseOut={() => setHover("")}
            style={{
              borderRadius: hover === "Projects" ? 5 : null,
              boxShadow:
                hover === "Projects"
                  ? "4px 4px 5px #0007, -2px -2px 5px #fff3"
                  : null,
            }}
          >
            Projects
          </a>
          <a
            className="options"
            onMouseEnter={() => setHover("Experiences")}
            onMouseOut={() => setHover("")}
            style={{
              borderRadius: hover === "Experiences" ? 5 : null,
              boxShadow:
                hover === "Experiences"
                  ? "4px 4px 5px #0007, -2px -2px 5px #fff3"
                  : null,
            }}
          >
            Experiences
          </a>
          <a
            className="options"
            onMouseEnter={() => setHover("Achivements")}
            onMouseOut={() => setHover("")}
            style={{
              borderRadius: hover === "Achivements" ? 5 : null,
              boxShadow:
                hover === "Achivements"
                  ? "4px 4px 5px #0007, -2px -2px 5px #fff3"
                  : null,
            }}
          >
            Achivements
          </a>
          <a
            className="options"
            onMouseEnter={() => setHover("Hobbies")}
            onMouseOut={() => setHover("")}
            style={{
              borderRadius: hover === "Hobbies" ? 5 : null,
              boxShadow:
                hover === "Hobbies"
                  ? "4px 4px 5px #0007, -2px -2px 5px #fff3"
                  : null,
            }}
          >
            Hobbies
          </a>
          <a
            className="options"
            onMouseEnter={() => setHover("ContactMe")}
            onMouseOut={() => setHover("")}
            style={{
              borderRadius: hover === "ContactMe" ? 5 : null,
              boxShadow:
                hover === "ContactMe"
                  ? "4px 4px 5px #0007, -2px -2px 5px #fff3"
                  : null,
            }}
          >
            Contact me
          </a>
        </div>
      ) : (
        <div className="sidebar">
          <FcGraduationCap
            onMouseEnter={() => setHover("Education")}
            onMouseOut={() => setHover("")}
            style={{
              borderRadius: hover === "Education" ? 5 : null,
              boxShadow:
                hover === "Education"
                  ? "4px 4px 5px #0007, -2px -2px 5px #fff3"
                  : null,
            }}
            className="options"
            size={24}
          />
          <GiSkills
            size={24}
            className="options"
            onMouseEnter={() => setHover("Skills")}
            onMouseOut={() => setHover("")}
            style={{
              borderRadius: hover === "Skills" ? 5 : null,
              boxShadow:
                hover === "Skills"
                  ? "4px 4px 5px #0007, -2px -2px 5px #fff3"
                  : null,
            }}
          />
          <AiOutlineProject
            size={24}
            className="options"
            onMouseEnter={() => setHover("Projects")}
            onMouseOut={() => setHover("")}
            style={{
              borderRadius: hover === "Projects" ? 5 : null,
              boxShadow:
                hover === "Projects"
                  ? "4px 4px 5px #0007, -2px -2px 5px #fff3"
                  : null,
            }}
          />
          <RiUserStarFill
            className="options"
            onMouseEnter={() => setHover("Experiences")}
            onMouseOut={() => setHover("")}
            style={{
              borderRadius: hover === "Experiences" ? 5 : null,
              boxShadow:
                hover === "Experiences"
                  ? "4px 4px 5px #0007, -2px -2px 5px #fff3"
                  : null,
            }}
            size={24}
          />
          <GiDiamondTrophy
            className="options"
            onMouseEnter={() => setHover("Achivements")}
            onMouseOut={() => setHover("")}
            style={{
              borderRadius: hover === "Achivements" ? 5 : null,
              boxShadow:
                hover === "Achivements"
                  ? "4px 4px 5px #0007, -2px -2px 5px #fff3"
                  : null,
            }}
            size={24}
          />
          <MdEmojiSymbols
            className="options"
            onMouseEnter={() => setHover("Hobbies")}
            onMouseOut={() => setHover("")}
            style={{
              borderRadius: hover === "Hobbies" ? 5 : null,
              boxShadow:
                hover === "Hobbies"
                  ? "4px 4px 5px #0007, -2px -2px 5px #fff3"
                  : null,
            }}
            size={24}
          />
          <IoMdContacts
            className="options"
            onMouseEnter={() => setHover("ContactMe")}
            onMouseOut={() => setHover("")}
            style={{
              borderRadius: hover === "ContactMe" ? 5 : null,
              boxShadow:
                hover === "ContactMe"
                  ? "4px 4px 5px #0007, -2px -2px 5px #fff3"
                  : null,
            }}
            size={24}
          />
        </div>
      )}
    </>
  );
}

export default SideBar;
