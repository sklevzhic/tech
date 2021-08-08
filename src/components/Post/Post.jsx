import {Card, CardActionArea, CardContent, CardMedia} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/styles";
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});
const Post = ({post}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={post.picture}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {post.text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Post