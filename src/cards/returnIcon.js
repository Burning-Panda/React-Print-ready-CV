import {ChatBubble, Group, InsertLink, Instagram, LinkedIn, VerifiedUser, GitHub, Facebook } from "@material-ui/icons";
import React from "react";
import AdobeXD from "../assets/svg/Adobe_XD_CC_icon.svg";
import Illustrator from "../assets/svg/Adobe_Illustrator_CC_icon.svg";
import Photoshop from "../assets/svg/Adobe_Photoshop_CC_icon.svg";
import HTML from "../assets/svg/Devicon-html5-plain-wordmark.svg";
import CSS from "../assets/svg/CSS3_logo_and_wordmark.svg";
import Python from "../assets/svg/Python.svg";
import Javascript from "../assets/svg/Javascript-shield.svg";
import Flask from "../assets/svg/flask.svg";
import SQLite from "../assets/svg/SQLite370.svg";
// import CSS from "../assets/svg/";

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
        case 'git':
            return (<GitHub />)
        case 'fb':
            return (<Facebook />)

        case 'Adobe XD':
            return (<img src={AdobeXD} alt="Adobe CC XD Ikon"/>)
        case 'Adobe Illustrator':
            return(<img src={Illustrator}  alt="Adobe CC Illustrator Ikon"/>)
        case 'Illustrator':
            return(<img src={Illustrator}  alt="Adobe CC Illustrator Ikon"/>)
        case 'Adobe Photoshop':
            return(<img src={Photoshop}  alt="Adobe CC Photoshop Ikon"/>)
        case 'HTML':
            return(<img src={HTML}  alt="HTML5 Logo by W3C" />)
        case 'CSS':
            return(<img src={CSS}  alt="CSS3 Logo by W3C" />)
        case 'Javascript':
            return (<img src={Javascript} alt="Javascript Ikon"/>)
        case 'Python':
            return (<img src={Python} alt="Python Ikon"/>)
        case 'Flask':
            return (<img src={Flask} alt="Flask Ikon, Copyright 2010 Pallets" />)
        case 'SQLite':
            return (<img src={SQLite} alt="SQLite Ikon"/>)

        default:
            return (ico)
    }
}
export default returnIcon