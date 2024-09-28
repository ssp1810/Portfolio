import React from "react";
import "./Skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
     return (
          <section id="skills">
               <span className="skillTitle">What I know</span>
               <br />
               <span className="skillDesc">
                    I am skilled and Passionate Web Developer with experience in
                    frontend development. Proficient in HTML, CSS, Javascript
                    and React JS. A good knowledge of Data Structures and
                    Algorithm with good problem solving skills.
               </span>
               <span className="skillBars">
                    <div className="skillBar">
                         <img src={UIDesign} alt="" className="skillBarImg" />
                    </div>
                    <div className="skillBar">
                         <img src={WebDesign} alt="" className="skillBarImg" />
                    </div>
                    <div className="skillBar">
                         <img src={AppDesign} alt="" className="skillBarImg" />
                    </div>
                    <div className="skillBar">
                         <img src={AppDesign} alt="" className="skillBarImg" />
                    </div>
                    <div className="skillBar">
                         <img src={AppDesign} alt="" className="skillBarImg" />
                    </div>
                    <div className="skillBar">
                         <img src={AppDesign} alt="" className="skillBarImg" />
                    </div>
               </span>
          </section>
     );
};

export default Skills;
