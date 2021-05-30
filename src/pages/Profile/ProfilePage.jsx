import {Container} from "@material-ui/core";
import ProfileInfo from "../../components/Profile";
import Posts from "../../components/Posts";

const ProfilePage = (isFetching) => {
    return (
        <Container>
            <ProfileInfo/>
            <Posts />
        </Container>
    )
}

export default ProfilePage

