import React from "react";
import LinkTo from '@material-ui/core/Link';
import {Facebook, GitHub, Instagram, Twitter, YouTube, Link, Telegram, Language} from '@material-ui/icons';
import {IconButton} from "@material-ui/core";

const SocialLink = ({contacts}) => {
    const icons = {
        facebook: Facebook,
        github: GitHub,
        instagram: Instagram,
        twitter: Twitter,
        youtube: YouTube,
        website: Language,
        vk: Telegram,
        mainLink: Link
    }
    return (
        <>
            {Object.keys(contacts).map(key => {
                let Icon = icons[key]
                return <LinkTo color="secondary" disabled={!contacts[key]} component={IconButton} key={key} target="_blank"
                               href={contacts[key]}>
                    <Icon/>
                </LinkTo>
            })}
        </>
    )
}

export default SocialLink