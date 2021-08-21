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
    let [aaa, setAAA] = useState(false)
    let [bbb, setBBB] = useState(false)
    let [ccc, setCCC] = useState(false)

    const classes = useStyles();
    console.log(aaa)
    return (
        <Container>
            <ProfileInfo/>
            <Portfolio/>
            <div style={{display: "flex", justifyContent: "space-around"}}>
                <div>
                    <div
                        className={`${classes.div} ${(aaa) ? classes.divheight : ""}`}
                        onClick={() => setAAA(!aaa)}
                    ></div>
                </div>
                <div>
                    <div
                        className={`${classes.div} ${(bbb) ? classes.divheight : ""}`}
                        onMouseEnter={() => setBBB(!bbb)}
                        onMouseLeave={() => setBBB(!bbb)}
                    ></div>
                </div>

                <div>
                    <div
                        className={`${classes.div} ${(ccc) ? classes.divheight : ""}`}
                        onTouchStart={() => setCCC(!ccc)}
                    ></div>
                </div>

            </div>

        </Container>
    )
}

export default ProfilePage

