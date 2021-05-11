import React from "react";
import LinkTo from '@material-ui/core/Link';
import {Facebook, GitHub, Instagram, Twitter, YouTube, Link, Telegram, Language} from '@material-ui/icons';
import {IconButton} from "@material-ui/core";
import icons from "../global/global";

const SocialLink = ({contacts}) => {
    return (
        <>
            {Object.keys(contacts).map(key => {
                let Icon = icons[key]

                if (contacts[key]) {

                    return <LinkTo color="secondary" disabled={!contacts[key]} component={IconButton} key={key}
                                   target="_blank"
                                   href={contacts[key]}>
                        <Icon/>
                    </LinkTo>
                }
                return null

            })}
        </>
    )
}

export default SocialLink