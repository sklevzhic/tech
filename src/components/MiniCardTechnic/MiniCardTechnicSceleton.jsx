import {Skeleton} from "@material-ui/lab";
import React from "react";

const MiniCardTechnicSkeleton = () => {
    return <>
        <Skeleton />
        <Skeleton animation={false} />
        <Skeleton animation="wave" />
        </>
}

export default MiniCardTechnicSkeleton