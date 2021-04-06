import s from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={s.bgpreloader}>
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        </div>

    )
}

export default Preloader