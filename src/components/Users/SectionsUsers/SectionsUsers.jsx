import Button from "../../Button";
import {withRouter} from "react-router-dom";
import {Link} from "react-router-dom";
import React from "react";

const SectionsUsers = (match) => {
    // let url = match.match.url.slice(1)
    return (
        <>
            <Button to="/allusers" component={Link} text="All Users"/>
            <Button to="/followers" component={Link} text="Followers"/>
            <Button to="/following" component={Link} text="Following"/>
        </>
    )
}

export default withRouter(SectionsUsers)