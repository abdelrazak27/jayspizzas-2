import style from './Button.module.scss';

const Button = (props) => {

    const {title, callback} = props;

    return (
        <button className={style.button} onClick={callback}>{title}</button>
    );
}

export default Button;