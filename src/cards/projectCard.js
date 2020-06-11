import React from "react";
import returnIcon from "./returnIcon";


const projects = (prod) => {
    function has_odd(nbr) {
        if (prod.length % 2 !== 0 && prod.length - 1 > 1 && nbr === prod.length - 1) {
            return ("project almostLast")
        }
        else {return ("project")}
    }
    return (
        <div className="projects">

            <div className="projectsHeader">
                <h3>Portfolio</h3>
                <p>Mine Prosjekter</p>
            </div>
            <div className="projectsList">
                {prod.map((object,i) =>
                <article className={has_odd(i)} key={i}>
                    <div className="projectImage">
                        <img src={ require('../assets/images/'+object.image) }  alt={object.imageAlt}/>
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
                <span>HTML5&nbsp;Logo&nbsp;by<a href="https://commons.wikimedia.org/wiki/File:Devicon-html5-plain-wordmark.svg" title="via Wikimedia Commons">Julien&nbsp;Monty&nbsp;(&nbsp;https://github.com/konpa&nbsp;),&nbsp;author&nbsp;of&nbsp;Devicon&nbsp;repository,&nbsp;created&nbsp;this&nbsp;SVG&nbsp;file</a>&nbsp;/&nbsp;<a href="http://opensource.org/licenses/mit-license.php">MIT</a></span>
                <span>CSS3&nbsp;Logo&nbsp;by&nbsp;<a href="https://commons.wikimedia.org/wiki/File:CSS3_logo_and_wordmark.svg" title="via Wikimedia Commons">Rudloff</a>&nbsp;/&nbsp;<a href="https://creativecommons.org/licenses/by/3.0">CC&nbsp;BY</a></span>
                <span><a href="https://commons.wikimedia.org/wiki/File:Adobe_Illustrator_CC_icon.svg" title="via Wikimedia Commons">Adobe&nbsp;Systems</a>&nbsp;/&nbsp;Public&nbsp;domain</span>
                <span><a href="https://commons.wikimedia.org/wiki/File:Adobe_Photoshop_CC_icon.svg" title="via Wikimedia Commons">Fred&nbsp;the&nbsp;Oyster</a>&nbsp;/&nbsp;Public&nbsp;domain</span>
                <span><a href="https://commons.wikimedia.org/wiki/File:Python.svg" title="via Wikimedia Commons">The&nbsp;people&nbsp;from&nbsp;the&nbsp;Tango!&nbsp;project.</a>&nbsp;/&nbsp;<a href="https://creativecommons.org/licenses/by-sa/3.0">CC&nbsp;BY&#8209;SA</a></span>
                <span><a href="https://commons.wikimedia.org/wiki/File:Javascript-shield.svg" title="via Wikimedia Commons">Omed&nbsp;Habib</a>&nbsp;/&nbsp;Public&nbsp;domain</span>
                <span><a href="https://palletsprojects.com/p/flask/" title="Pallets 2010, Flask">Copyright&nbsp;2010&nbsp;Pallets</a></span>
                <span><a href="https://commons.wikimedia.org/wiki/File:SQLite370.svg" title="via Wikimedia Commons">Part&nbsp;of&nbsp;the&nbsp;SQLite&nbsp;documentation,&nbsp;which&nbsp;has&nbsp;been&nbsp;released&nbsp;by&nbsp;author&nbsp;D.&nbsp;Richard&nbsp;Hipp&nbsp;to&nbsp;the&nbsp;public&nbsp;domain.&nbsp;SVG&nbsp;conversion&nbsp;by&nbsp;Mike&nbsp;Toews.</a>&nbsp;/&nbsp;Public&nbsp;domain</span>
            </div>
        </div>
    )
}

export default projects