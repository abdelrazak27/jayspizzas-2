import style from "./ContainerFlexBetween.module.scss";

const ContainerFlexBetween = (props) => {
    const { children } = props;

    return (
        <div className={style.wrapper}>
            {children}
        </div>
    )
}

export default ContainerFlexBetween;