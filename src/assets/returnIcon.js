import {ChatBubble, Group, InsertLink, Instagram, LinkedIn, VerifiedUser, GitHub} from "@material-ui/icons";
import React from "react";

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
        default:
            return null
    }
}
export default returnIcon