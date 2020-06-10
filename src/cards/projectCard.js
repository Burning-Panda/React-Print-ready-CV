import React from "react";
import returnIcon from "./returnIcon";


const projects = (prod) => {

    return (
        <div className="projects">

            <div className="projectsHeader">
                <h3>Portfolio</h3>
                <p>Mine Prosjekter</p>
            </div>
            <div className="projectsList">
                {prod.map((object,i) =>
                <article className="project" key={i}>
                    <div className="projectImage">
                        <img src={ require('../assets/images/'+object.image+object.imageType) }  alt={object.imageAlt}/>
                    </div>
                    {(typeof object.url != "undefined") ? (
                        <div><h3><a href={object.url}>{object.name}</a></h3><small>{object.url}</small></div>
                    ) : (<h3 className="no-link">{object.name}</h3>)}

                    <p>{object.description}</p>

                    <div className="projectTools">
                        {(typeof object.tools != "undefined") ? (
                            <ul className="projProgList">
                                {object.tools.map((item, j) =>
                                    <li key={j}>{returnIcon(item)}</li>
                                )}
                            </ul>
                        ) : ('')}
                    </div>
                </article>
                )}
            </div>

            <div className="Attribution">
                <span>HTML5 Logo by<a href="https://commons.wikimedia.org/wiki/File:Devicon-html5-plain-wordmark.svg" title="via Wikimedia Commons">Julien Monty ( https://github.com/konpa ), author of Devicon repository, created this SVG file</a> / <a href="http://opensource.org/licenses/mit-license.php">MIT</a></span>
                <span>CSS3 Logo by <a href="https://commons.wikimedia.org/wiki/File:CSS3_logo_and_wordmark.svg" title="via Wikimedia Commons">Rudloff</a> / <a href="https://creativecommons.org/licenses/by/3.0">CC BY</a></span>
                <span><a href="https://commons.wikimedia.org/wiki/File:Adobe_Illustrator_CC_icon.svg" title="via Wikimedia Commons">Adobe Systems</a> / Public domain</span>
                <span><a href="https://commons.wikimedia.org/wiki/File:Adobe_Photoshop_CC_icon.svg" title="via Wikimedia Commons">Fred the Oyster</a> / Public domain</span>
                <span><a href="https://commons.wikimedia.org/wiki/File:Python.svg" title="via Wikimedia Commons">The people from the Tango! project.</a> / <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA</a></span>
                <span><a href="https://commons.wikimedia.org/wiki/File:Javascript-shield.svg" title="via Wikimedia Commons">Omed Habib</a> / Public domain</span>
            </div>
        </div>
    )
}

export default projects