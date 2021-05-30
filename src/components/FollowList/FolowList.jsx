import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import React from "react";

const FollowList = ({followedBy, follows, media}) => {
    let buttons = [
        {
            text: "Подписчиков",
            to: "/users/followers",
            count: followedBy = '--',
        },
        {
            text: "подписок",
            to: "/users/following",
            count: follows = 10,
        },
        {
            text: "публикаций",
            to: "publications",
            count: media = '--',
        },
    ]
    return (
        <> {
            buttons.map(el => {
                return <Button
                    component={Link}
                    key={el.to}
                    to={el.to}
                    variant="outlined"
                    href="#text-buttons"
                >
                    <span>{el.count} </span> {el.text}
                </Button>
            })
        }
</>
    )
}

export default FollowList