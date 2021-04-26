import {Container} from "@material-ui/core";
import s from './ProfilePage.module.css'
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";

const ProfilePage = () => {
    return (
        <Container
        >
            <ProfileInfo />
        </Container>
    )
}

export default ProfilePage

