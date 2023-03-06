import './button.styles.scss'

/*  There are 2 alternate button styles apart from the default button. 
    These buttons are - "google-sign-in" & "inverted" 
    To use these buttons, mention the button name on buttonType attribute*/

const Button = ({ childeren, buttonType, ...otherProps }) => {
    return (
        <button className={`button-container ${buttonType}`} {...otherProps}>{childeren}</button>
    )
}

export default Button;