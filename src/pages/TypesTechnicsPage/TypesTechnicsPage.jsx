import React from "react";
import {withRouter} from "react-router-dom";

import ListTypes from "../../components/ListTypes";

const TypesTechnicsPage = () => {

    return (
        <div>
            <ListTypes />
        </div>
    )
}

export default withRouter(TypesTechnicsPage)