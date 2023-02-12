import style from "./QuantityPicker.module.scss";
import Button from "../Button/Button";

const QuantityPicker = (props) => {

    const {quantity, onClickPlus, onClickMinus} = props;
    
    return (
        <div className={style.quantityPicker}>
            <button onClick={onClickMinus} disabled={quantity === 1}>-</button>
            <button onClick={onClickPlus}>+</button>
            <p>Quantité : {quantity}</p>
        </div>
    )
}

export default QuantityPicker;