import {withRouter} from "react-router";
import React from "react";
import Post from "../Post/Post";
import {Grid} from "@material-ui/core";

const Posts = ({posts}) => {

    const postsElements = posts.map(post => {
            return <Post key={post._id} post={post} />
        })

    return (
        <>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="stretch"
                >
            { postsElements }
            </Grid>
        </>
    )
}

export default withRouter(Posts);