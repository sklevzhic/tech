const SocialButton = ({contactTitle, contactValue}) => {
    return <div>
        <a
            disabled={!contactValue}
            href={contactValue}
            target="_blank"
            rel="noreferrer"
            className="waves-effect waves-light btn-small">{contactTitle}</a>
    </div>
}
export default SocialButton