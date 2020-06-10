import json from "../assets/json";
import React from "react";
import returnIcon from "./returnIcon";

const sosMed = () => {
    return (
        <article className="sosMed">
            <h3>Sosiale Medier</h3>
            <ul>
                {json.socialMedia.map((sm,i) =>
                    <li key={i}>
                        <div className="sosMedIcon">
                            <div>{returnIcon(sm.icon)}</div>
                            {(typeof sm.link != "undefined") ? (
                                <div>
                                    <a href={sm.link}
                                       aria-describedby={sm.alt}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                    >{sm.name}</a>
                                </div>
                            ) : (
                                <div>{sm.name}</div>
                            )}
                        </div>
                    </li>
                )}
            </ul>
        </article>
    )
}
export default sosMed