import json from "../assets/json";
import React from "react";

const certifications = () => {
    return (
        <article className="certification">
            <h3>Sertifikater</h3>
            <ul>
                {json.certifications.map((cert,i) =>
                    <li key={i}>
                        <h4>{cert.name}</h4>
                        <small>
                            <i>{cert.from}</i>
                        </small>
                    </li>
                )}
            </ul>
        </article>
    )
}
export default certifications