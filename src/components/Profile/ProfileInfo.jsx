import {Link} from 'react-router-dom'
import CurrentInfo from "./CurrentInfo";
import userPhoto from '../../assets/img/admin.jpg'
import SocialButton from "../SocialButton/SocialButton";

const ProfileInfo = ({user, status, updateStatus, isOwner, uploadPhoto}) => {
    const onMainPhotoSelectd = (e) => {
        uploadPhoto(e.target.files[0])
    }
    return (
        <div className="row">
            {
                (user === '')
                    ? <p>Загрузка</p>
                    : <div>
                        <div className="col s4">
                            <img src={user.photos.large || userPhoto} alt="2"/>
                            {isOwner && <input type={"file"} onChange={onMainPhotoSelectd}/> }
                        </div>
                        <div className="col s8">
                            <div className="card">
                                <div className="card-content">
                                    <span className="card-title">{user.fullName} </span>
                                    <CurrentInfo statusGlobalState={status} updateStatus={updateStatus}/>
                                    <div className="card-action">
                                        <button className="waves-effect waves-light btn"><i
                                            className="material-icons left">cloud</i>0 публикаций
                                        </button>
                                        <button className="waves-effect waves-light btn"><i
                                            className="material-icons left">cloud</i>0 подписчиков
                                        </button>
                                        <button className="waves-effect waves-light btn"><i
                                            className="material-icons left">cloud</i>0 подписок
                                        </button>
                                    </div>
                                    <h5>{user.aboutMe} </h5>
                                    <p>{user.avatar}</p>
                                    <div className="collection">
                                        <a className="collection-item">Ищу работу: {user.lookingForAJob ? "Да": "Нет"}</a>
                                        <a className="collection-item">Сопроводительное письмо: {user.lookingForAJobDescription}</a>
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
                        </div>
                    </div>
            }


        </div>
    )
}

export default ProfileInfo