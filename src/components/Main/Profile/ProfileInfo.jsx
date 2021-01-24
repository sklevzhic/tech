import { Link } from 'react-router-dom'

const ProfileInfo = () => {
    return (
        <div className="row">
            <div className="col s4">
                <img src="https://scontent-waw1-1.cdninstagram.com/v/t51.2885-19/s320x320/118600692_247880799703358_8852788300667454622_n.jpg?_nc_ht=scontent-waw1-1.cdninstagram.com&_nc_ohc=DJJMitTKOr0AX9rAss0&tp=1&oh=e7138f7e0fb3a1f7a8b0c2e6460b3bb8&oe=6035F046" alt=""/>
            </div>
            <div className="col s8">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">a_klevzhits</span>
                        <div className="card-action">
                            <a className="waves-effect waves-light btn"><i className="material-icons left">cloud</i>0 публикаций</a>
                            <a className="waves-effect waves-light btn"><i className="material-icons left">cloud</i>0 подписчиков</a>
                            <a className="waves-effect waves-light btn"><i className="material-icons left">cloud</i>0 подписок</a>
                        </div>
                        <h5>Alexander Klevzhits</h5>
                        <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>

                        <Link to='/addpost' className="btn-floating btn-large waves-effect waves-light red"><i
                            className="material-icons">add</i></Link>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ProfileInfo