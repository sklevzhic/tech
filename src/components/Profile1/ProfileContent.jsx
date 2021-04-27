import CurrentInfo from "./CurrentInfo";
import SocialButton from "../SocialButton/SocialButton";
import {Link} from "react-router-dom";

const ProfileContent = ({user, status, updateStatus, isOwner, uploadPhoto}) => {
    return (
        <div className="card">
            <div className="card-content">
                <span className="card-title">{user.fullName} </span>
                <CurrentInfo statusGlobalState={status} updateStatus={updateStatus}/>
                <h5>{user.aboutMe} </h5>
                <p>{user.avatar}</p>
                <div className="collection">
                    <a href="/#" className="collection-item">Ищу работу: {user.lookingForAJob ? "Да": "Нет"}</a>
                    <a href="/#" className="collection-item">Сопроводительное письмо: {user.lookingForAJobDescription}</a>
                </div>

                <div>
                    <p>Контакты</p>
                    {
                        Object.keys(user.contacts).map(key => {
                            return <SocialButton key={key} contactTitle={key} contactValue={user.contacts[key]}/>
                        })
                    }
                </div>
                <Link to='/addpost' className="btn-floating btn-large waves-effect waves-light red"><i
                    className="material-icons">add</i></Link>
            </div>


        </div>
    )
}

export default ProfileContent