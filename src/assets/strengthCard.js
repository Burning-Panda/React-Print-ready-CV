import json from "./json";
import React from "react";
import returnIcon from "./returnIcon";

const strengths = () => {
    return (
        <article className="strengths">
            <h3>Styrker</h3>
            <ul>
                {json.strengths.map((stre,i) =>
                    <li key={i}>
                        <div className="strength">
                            <div>{returnIcon(stre.icon)}</div><div><span>{stre.text}</span></div>
                        </div>
                    </li>
                )}
            </ul>
        </article>
    )
}
export default strengths