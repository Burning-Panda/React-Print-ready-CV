import json from "../assets/json";
import {DateRange} from "@material-ui/icons";
import React from "react";

const experiences = () => {
    return (
        <article className="experiences">
            <h3>Erfaring</h3>
            <ul className="experienceList">
                {json.experiences.map((obj, i) =>
                    <li className="experience" key={i}>
                        <div className="expTitle">
                            <h4 className="">{obj.name}</h4>
                            <small>{obj.location}</small>
                        </div>
                        <div className="expDate">
                            <div><DateRange /></div>
                            <div className="date">{obj.startDate} &mdash; {obj.endDate}</div>
                        </div>
                        <div className="description">
                            <p>{obj.description}</p>
                            {(typeof obj.list != "undefined") ? (
                                <div>
                                    <h5>Oppgaver</h5>
                                    <ul className="descList">
                                        {obj.list.map((object,i) => <li key={i}>{object}</li> )}
                                    </ul>
                                </div>
                            ) :('')}
                        </div>
                    </li>
                )}
            </ul>
        </article>
    )
}

export default experiences