import style from './Button.module.scss';

const Button = (props) => {

    const {selected, title, callback} = props;

    return (
        <button className={`${style.button} ${selected === false ? style.buttonRed : ""}`} onClick={callback}>{title}</button>
    );
}

export default Button;