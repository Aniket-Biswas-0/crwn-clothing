import './button.styles.scss'

const Button = ({ childeren, buttonType, ...otherProps }) => {
    return (
        <button className={`button-container ${buttonType}`} {...otherProps}>{childeren}</button>
    )
}

export default Button;