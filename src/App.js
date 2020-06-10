import React from 'react';
import json from "./assets/json";
import { Phone, AlternateEmail, LocationOn} from '@material-ui/icons';
import skills from "./cards/skillsCard";
import experiences from "./cards/experiencesCard";
import publications from "./cards/publications";
import education from "./cards/educationCard";
import strengths from "./cards/strengthCard";
import certifications from "./cards/certificationsCard";
import sosMed from "./cards/sosialMediaCard";
import projects from "./cards/projectCard";
import coverLetter from "./cards/coverLetterCard";

function App() {
    return (
    <div className="App">
      <div className="pageSeperator"></div>
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

      <div className="otherInfo">
        {(typeof json.coverLetter != "undefined") ? (
            coverLetter(json.coverLetter)
        ) : ('')}

        {(typeof json.projects != "undefined") ? (
            projects(json.projects)
        ) : ('')}
      </div>

      <footer>
      </footer>
    </div>
  );
}

export default App;
