import React from 'react';
import json from "./assets/json";
import getForm from "./assets/formLayout";
import { Phone, AlternateEmail, LocationOn, VerifiedUser, Group, ChatBubble, DateRange, InsertLink, Instagram, LinkedIn} from '@material-ui/icons';

function returnIcon(ico) {
  switch (ico) {
    case 'VUI':
      return (<VerifiedUser />)
    case 'Team':
      return (<Group />)
    case 'Chat':
      return (<ChatBubble />)
    case 'Link':
      return (<InsertLink />)
    case 'ig':
      return (<Instagram />)
    case 'li':
      return (<LinkedIn />)
    default:
      return null
  }
}


function App() {
    return (
    <div className="App">
      <div className="pageSeperator">{getForm()}</div>
      <header>
        <h1>{json.basicInfo.name}</h1>
        <h2>{json.basicInfo.subtitle}</h2>
        <div className="basicInfo">
          <div className="phone">
            <p><Phone /></p>
            {json.basicInfo.phone}
          </div>
          <div className="email">
            <p><AlternateEmail /></p>
            {json.basicInfo.email}
          </div>
          <div className="location">
            <p><LocationOn /></p>
            {json.basicInfo.location}
          </div>
        </div>
      </header>

      <main>
        {(typeof json.skills != "undefined") ? (
        <article className="skills">
          <h3>Skills</h3>
          <p className="skillsList">
            {json.skills.map((object,i) => <span className="skill" key={i}>{object}</span> )}
          </p>
        </article>
        ) : ('')}


        {(typeof json.experiences != "undefined") ? (
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
        ) : ('')}


        {(typeof json.publications != "undefined") ? (
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
        ) : ('')}

      </main>


      <aside>
        {(typeof json.education != "undefined") ? (
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
        ) : ('')}

        {(typeof json.strengths != "undefined") ? (
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
        ) : ('')}
        {(typeof json.certifications != "undefined") ? (
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
        ) : ('')}

        {(typeof json.socialMedia != "undefined") ? (
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
        ) : ('')}
      </aside>
      <footer>
      </footer>
    </div>
  );
}

export default App;
