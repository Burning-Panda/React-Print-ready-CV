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
    function letter_to(e,v, c=null) {
        if (e !== '') {
            if (v === 'to') {
                return (
                    <div>
                        <h4>{c}</h4>
                        <span>{e}</span>
                    </div>
                );
            }
            else if (v === 'time') {return (<time className="eduDate" dateTime="{e}">{dateformat(e)}</time>)}
            else {return null}
        } else if (c !== null) {return (<h2>{c}</h2>)}
        else {return null}
    }

    return (
        <div className="coverLetter">
            <div className="Head">
                <div className="time">

                    {(typeof letter.to != "undefined") ? (letter_to(letter.to, 'to', letter.title)) : (
                        <h3>{letter.title}</h3>
                    )}
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