import {Link} from 'react-router-dom'
import CurrentInfo from "./CurrentInfo";
import userPhoto from '../../assets/img/admin.jpg'

const ProfileInfo = ({user, status, updateStatus, isOwner}) => {

    const onMainPhotoSelectd = (e) => {
        console.log(e.target.value[0])
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