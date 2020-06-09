import React from "react";

const projects = (prod) => {
    console.log(prod)
    return (
        <div className="projects">

            <div className="projectsHeader">
                <h3>Portfolio</h3>
                <p>Mine Prosjekter</p>
            </div>
            <div className="projectsList">
                <article className="project">
                    <h2>Article</h2>
                    <p>Text</p>
                </article>
                <article className="project">
                    <h2>Article</h2>
                    <p>Text</p>
                </article>
            </div>
        </div>
    )
}

export default projects