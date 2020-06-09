import json from "./json";
import {DateRange} from "@material-ui/icons";
import React from "react";

const education = () => {
    return (
        <article className="education">
            <h3>Utdanning</h3>
            <ul>
                {json.education.map((edu,i) =>
                    <li className="educationList" key={i}>
                        <div className="eduTitle">
                            <h4 className="">{edu.degree}</h4>
                            <small>{edu.university}</small>
                        </div>
                        <div className="eduDate">
                            <div><DateRange /></div><div className="date">{edu.startDate} &mdash; {edu.endDate}</div>
                        </div>
                        <div>
                            <p className="description">{edu.description}</p>
                        </div>
                    </li>
                )}
            </ul>
        </article>
    )
}

export default education