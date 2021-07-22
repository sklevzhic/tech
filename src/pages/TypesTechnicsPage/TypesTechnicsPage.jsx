import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useParams, withRouter} from "react-router-dom";

import ListTypes from "../../components/ListTypes";

const TypesTechnicsPage = ({addType}) => {

    return (
        <div>
            <ListTypes />
        </div>
    )
}

export default withRouter(TypesTechnicsPage)