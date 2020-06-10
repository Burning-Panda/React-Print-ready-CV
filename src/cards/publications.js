import json from "../assets/json";
import React from "react";
import returnIcon from "./returnIcon"

const publications = () => {
    return (
        <article className="publications">
            <h3>Publikasjoner</h3>
            <ul className="publicationsList">
                {json.publications.map((obj, i) =>
                    <li className="publication" key={i}>
                        <h4>{obj.name}</h4>
                        {(typeof obj.link != "undefined") ? (
                            <div className="pubLink">
                                <div>{returnIcon('Link')}</div>
                                <div><small><a href={obj.link}>{obj.link}</a></small></div>
                            </div>
                        ) : ("")}
                        <p className="description">{obj.description}</p>
                        <b>Språk brukt</b>
                        <ul className="pubLang">
                            {obj.languageUsed.map((innerObj,i) =>
                                <li key={i}>{innerObj}</li>
                            )}
                        </ul>
                    </li>
                )}
            </ul>
        </article>
    )
}
export default publications