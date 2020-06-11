import React from "react";
import Moment from "moment";
import 'moment/locale/nb';
import signature from "../assets/Main.png"

const coverLetter = (letter) => {
    const dateformat = (x) => {
        Moment().locale('nb');
        return (
            Moment(x).format('ll')
        )
    }
    function letter_to(e,v) {
        if (e !== '') {
            if (v === 'to') {return (<div><span>{e}</span></div>);}
            else if (v === 'time') {return (<time className="eduDate" dateTime="{e}">{dateformat(e)}</time>)}
            else {return null}
        } else {return null}
    }

    return (
        <div className="coverLetter">
            <div className="Head">
                <div className="time">
                    <h4>{letter.title}</h4>
                    {(typeof letter.to != "undefined") ? (letter_to(letter.to, 'to')) : ('')}
                    {(typeof letter.date != "undefined") ? (letter_to(letter.date, 'time')) : ('')}
                </div>
            </div>
            <div className="Body">
                <div className="BodyParas">
                    {letter.paragraphs.map((object,i) =>
                        <p className="paragraphs" key={i}>{object}</p>
                    )}
                </div>
            </div>
            <div className="Signature">
                <div>
                    <div>{letter.from}</div>
                    <div><i>{letter.work}</i></div>
                </div>
                {letter.signature === true &&
                <img src={signature}  alt="Signaturen til {letter.from}"/>
                }
            </div>
        </div>
    )
}

export default coverLetter