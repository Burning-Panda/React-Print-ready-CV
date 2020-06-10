import React from "react";
import Moment from "moment";
import 'moment/locale/nb';
import signature from "../assets/Main.png"

const coverLetter = (letter) => {
    const dateform = (x) => {
        Moment().locale('nb');
        return (
            Moment(x).format('ll')
        )
    }
    return (
        <div className="coverLetter">
            <div className="Head">
                <div className="time">
                    <h4>To: {letter.title}</h4>
                    {(typeof letter.to != "undefined") ? (
                        <div>
                            <span>{letter.to}</span>
                        </div>
                        ) : ('')}
                    <time className="eduDate" dateTime="{letter.date}">{dateform(letter.date)}</time>
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