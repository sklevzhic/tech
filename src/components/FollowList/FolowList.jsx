import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import React from "react";

const FollowList = ({followedBy, follows, media}) => {
    let buttons = [
        {
            text: "Подписчиков",
            to: "followers",
            count: followedBy = 25,
        },
        {
            text: "подписок",
            to: "following",
            count: follows = 10,
        },
        {
            text: "публикаций",
            to: "publications",
            count: media = 15,
        },
    ]
    return (
        <> {
            buttons.map(el => {
                return <Link key={el.to}
                    to={el.to}>
                    <Button
                        variant="outlined"
                        href="#text-buttons"
                    >
                        <span>{el.count} </span> {el.text}
                    </Button>
                </Link>
            })
        }
</>
    )
}

export default FollowList