import React from 'react';
import json from "./assets/json";
import getForm from "./assets/formLayout";
import { Phone, AlternateEmail, LocationOn, VerifiedUser, Group, ChatBubble, DateRange, InsertLink, Instagram, LinkedIn} from '@material-ui/icons';
import skills from "./assets/skillsCard";
import experiences from "./assets/experiencesCard";
import publications from "./assets/publications";
import education from "./assets/educationCard";
import strengths from "./assets/strengthCard";
import certifications from "./assets/certificationsCard";
import sosMed from "./assets/sosialMediaCard";
import projects from "./cards/projectCard";

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


      {(typeof json.projects != "undefined") ? (
          projects(json.projects)
      ) : ('')}

      <footer>
      </footer>
    </div>
  );
}

export default App;
