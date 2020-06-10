import json from "../assets/json";
import React from "react";

const skills = () => {
    return (
        <article className="skills">
            <h3>Skills</h3>
            <p className="skillsList">
                {json.skills.map((object,i) => <span className="skill" key={i}>{object}</span> )}
            </p>
        </article>
    )
}

export default skills