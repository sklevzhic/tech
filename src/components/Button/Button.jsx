import ButtonMU from '@material-ui/core/Button'

const Button = ({text, variant, className}) => {
    return (
        <ButtonMU
            className={className}
            variant={variant}
        >{text}</ButtonMU>
    )
}

export default Button