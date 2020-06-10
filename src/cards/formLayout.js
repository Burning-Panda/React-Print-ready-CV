import React, { useState } from "react";

const Form = () => {
    const [basicInfo, setBasicInfo] = useState([
        {name: '', grade: '', phone: '', email: '', location: ''}
    ]);
    const [skills, setSkills] = useState([
        {skills:''}
    ]);
    const [experiences, setExperiences] = useState([
        {name: '', location: '', startDate: '', endDate: '', description: '', list: ''}
    ]);
    const [publications, setPublications] =  useState([
        {name: "", description: "", tasks: "", languageUsed: "", link: ""}
    ]);

    const [strengths, setStrengths] = useState([
        {text: "", icon: ""}
    ]);

    const [education,setEducation] = useState([
        {degree: "", university: "", startDate: "", endDate: "", description: ""}
    ]);

    const [certifications,setCertifications] = useState([
        {name:"", from:""}
    ]);

    return (
        <form>
            <fieldset>
                <input type="submit" value="Lagre" />
                <h2>Basic Info</h2>
                {basicInfo.map((obj, i) => {
                    const info = `${i}`;
                    return (
                    <div className="inputGroup" key={i}>
                        <label htmlFor={info}>{info}</label>
                        <input type="text" name="{info}" id="{info}" />
                    </div>
                )})}
                <h2>Utdanning</h2>
                <input type="button" value="Legg til utdanning" />
                {
                    education.map((val, idx) => {
                        const edu = `skill-${idx}`;
                        return (
                            <div className="inputGroup" key={`edu-${idx}`}>
                                <label htmlFor={edu}>{`Utdanning #${idx+1}`}</label>
                                <input
                                    type="text"
                                    name={edu}
                                    data-idx={idx}
                                    id={edu}
                                    className="edu"
                                />
                            </div>
                        )
                    })
                }

                <h2>Styrker</h2>
                <h2>Ferdigheter</h2>
                <h2>Erfaring</h2>
                <h2>Sertifikater</h2>

                <input type="submit" value="Lagre" />
            </fieldset>
        </form>
    )
}

export default Form