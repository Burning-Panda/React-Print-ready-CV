import React from 'react';
import json from "./json";

function App() {
  console.log(json)
    return (
    <div className="App">
      <header className="ebonyClay">
        <h1>{json.basicInfo.name}</h1>
        <h2>{json.basicInfo.subtitle}</h2>
        <div className="basicInfo">
          <div className="phone">
            <p>Icon</p>
            {json.basicInfo.phone}
          </div>
          <div className="email">
            <p>Icon</p>
            {json.basicInfo.email}
          </div>
          <div className="location">
            <p>Icon</p>
            {json.basicInfo.location}
          </div>
        </div>
      </header>

      <main>
        {(typeof json.skills != "undefined") ? (
        <div className="skills">
          <h3>Skills</h3>
          <p className="skillsList">
            {json.skills.map((object,i) => <span className="skill" key={i}>{object}</span> )}
          </p>
        </div>
        ) : ('')}





        {(typeof json.experiences != "undefined") ? (
        <div className="experiences">
          <h3>Erfaring</h3>
          <ul className="experienceList">
            {json.experiences.map((obj, i) =>
            <li className="experience">
              <div className="expTitle">
                <h4 className="">{json.experiences[i].name}</h4>
                <small>{json.experiences[i].location}</small>
              </div>
              <div className="expDate">
                <i>I</i><span className="date">{json.experiences[i].startDate} - {json.experiences[i].endDate}</span>
              </div>
              <div className="description">
                <p>{json.experiences[i].description}</p>
                <ul className="descList">
                  {json.experiences[i].list.map((object,i) => <li key={i}>{object}</li> )}
                </ul>
              </div>
            </li>
            )}
          </ul>
        </div>
        ) : ('')}


        {(typeof json.publications != "undefined") ? (
        <div className="publications">
          <h3>Publikasjoner</h3>
          <ul className="publicationsList">
            {json.publications.map((obj, i) =>
            <li className="publication" key={i}>
              <h4>{obj.name}</h4>
              <p>{obj.description}</p>
              <b>Lang</b>
              <ul className="pubLang">
                {obj.languageUsed.map((innerObj,i) =>
                <li key={i}>{innerObj}</li>
                )}
              </ul>
            </li>
            )}
          </ul>
        </div>
        ) : ('')}

      </main>
      <aside>
        {(typeof json.education != "undefined") ? (
        <div className="education">Edu</div>
        ) : ('')}

        {(typeof json.strengths != "undefined") ? (
        <div className="strengths">
          str
        </div>
        ) : ('')}
        {(typeof json.certifications != "undefined") ? (
        <div className="certification">
          cert
        </div>
        ) : ('')}
      </aside>
    </div>
  );
}

export default App;
