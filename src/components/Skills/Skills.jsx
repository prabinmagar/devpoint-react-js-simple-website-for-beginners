import React from "react";
import "./Skills.css";
import images from "../../constants/images";
import data from "../../constants/data";

const Skills = () => {
    return (
        <div className="skills bg__whitesmoke section__padding" style = {{
            background: `url(${images.skills_bg}) center/cover no-repeat`
        }}>
            <div className="container">
                <h2 className="section__title text__center">
                    Professional Skills
                </h2>
                <div className="skills__content grid">
                    <div className="skills__content--left">
                        {
                            data.skills.map((skill, index) => {
                                return (
                                    <div className="skills__item" key = {index}>
                                        <div className="flex">
                                            <span className="skills__item--title fw__5">{skill.title}</span>
                                            &nbsp;
                                            <span className="fw__5">({skill.value})</span>
                                        </div>
                                        <div className="skills__item--progressbar">
                                            <div style = {{width: skill.value}}></div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;