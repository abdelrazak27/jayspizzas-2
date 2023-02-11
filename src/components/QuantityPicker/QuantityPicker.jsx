const QuantityPicker = (props) => {

    const {quantity, onClickPlus, onClickMinus} = props;
    
    return (
        <div>
            <button onClick={onClickMinus} disabled={quantity === 1}>-</button>
            <p>Qté : {quantity}</p>
            <button onClick={onClickPlus}>+</button>
        </div>
    )
}

export default QuantityPicker;