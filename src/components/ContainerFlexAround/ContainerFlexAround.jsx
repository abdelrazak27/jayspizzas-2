import style from "./ContainerFlexAround.module.scss";

const ContainerFlexAround = (props) => {

    const {titre, children} = props;

    return (
        <div>
            <h2>{titre}</h2>
            <div className={style.wrapper}>
                {children}
            </div>
        </div>
    )
}

export default ContainerFlexAround;