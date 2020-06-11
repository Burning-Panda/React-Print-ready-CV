import React from 'react';
import json from "./assets/json";
import {AlternateEmail, LocationOn, Phone} from "@material-ui/icons";
import skills from "./cards/skillsCard";
import experiences from "./cards/experiencesCard";
import publications from "./cards/publications";
import education from "./cards/educationCard";
import strengths from "./cards/strengthCard";
import certifications from "./cards/certificationsCard";
import sosMed from "./cards/sosialMediaCard";
import projects from "./cards/projectCard";
import coverLetter from "./cards/coverLetterCard";
import SimpleReactLightbox from "simple-react-lightbox";


const pageSeperatorIsNeeded = false;

function App() {
  function pageSeperatorView() {
    if (pageSeperatorIsNeeded === true) {
      return (<div className="pageSeperator"/>)
    }
  }
    return (
    <div className="App">

      <SimpleReactLightbox>

      {pageSeperatorView()}
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

        <main className="sizer">
          {(typeof json.skills != "undefined") ? (skills()) : ('')}
          {(typeof json.experiences != "undefined") ? (experiences()) : ('')}
          {(typeof json.publications != "undefined") ? (publications()) : ('')}

        </main>


        <aside>
          {(typeof json.education != "undefined") ? (education()) : ('')}
          {(typeof json.strengths != "undefined") ? (strengths()) : ('')}
          {(typeof json.certifications != "undefined") ? (certifications()) : ('')}
          {(typeof json.socialMedia != "undefined") ? (sosMed()) : ('')}
        </aside>

        <div className="headLarge">
          <div className="projectsHeader">
            <h3>Portfolio</h3>
            <p>Mine Prosjekter</p>
          </div>
        </div>
        <div className="otherProjects">
          {(typeof json.projects != "undefined") ? (
              projects(json.projects)
          ) : ('')}
        </div><div className="mainCoverLetter">
        {(typeof json.coverLetter != "undefined") ? (
            coverLetter(json.coverLetter)
        ) : ('')}
      </div>

        <footer>
        </footer>

      </SimpleReactLightbox>
    </div>
  );
}

export default App;
