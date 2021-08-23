import {Container} from "@material-ui/core";
import ProfileInfo from "../../components/Profile";
import Portfolio from "../../components/Portfolio";
import {makeStyles} from "@material-ui/styles";
import {useState} from "react";

const useStyles = makeStyles((theme) => ({
    div: {
        height: "200px",
        background: "red",
        width: "200px"
    },
    divheight: {
        height: "800px"
    }
}))


const ProfilePage = () => {
    const classes = useStyles();
    return (
        <Container>
            <ProfileInfo/>
            <Portfolio/>
        </Container>
    )
}

export default ProfilePage

