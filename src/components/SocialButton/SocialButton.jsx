const SocialButton = ({contactTitle, contactValue}) => {
    return <div>
        <a href={contactValue} target="_blank" className="waves-effect waves-light btn-small">{contactTitle}</a>
    </div>
}
export default SocialButton