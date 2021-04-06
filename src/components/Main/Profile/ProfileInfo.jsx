import {Link} from 'react-router-dom'
import CurrentInfo from "./CurrentInfo";

const ProfileInfo = (props) => {
    return (
        <div className="row">
            {
                (props.user === '')
                    ? <p>Загрузка</p>
                    : <div>
                        <div className="col s4">
                            {
                                ((props.user.photos.large === null) || (props.user.photos.small === null))
                                    ? <img src="https://cropas.by/wp-content/uploads/2015/05/admin.jpg" alt="1"/>
                                    : <img src={props.user.photos.large} alt="2"/>
                            }
                        </div>
                        <div className="col s8">
                            <div className="card">
                                <div className="card-content">
                                    <span className="card-title">{props.user.fullName} </span>
                                    <CurrentInfo status={props.status}/>
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
                                    <h5>{props.user.aboutMe} </h5>
                                    <p>{props.user.avatar}</p>

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