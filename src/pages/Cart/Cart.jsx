import { observer } from "mobx-react-lite";
import Button from "../../components/Button/Button";
import QuantityPicker from "../../components/QuantityPicker/QuantityPicker";
import { useStore } from "../../contexts/store.context";

const Cart = observer(() => {

    const {cart} = useStore();
    const {products, removeFromCart, totalPrice, resetCart} = cart;


    return (
        <main>
            <h1>Voici le panier ({totalPrice}€)</h1>
            <button onClick={resetCart}>reset</button>
            <ul>
                {products.map((product) => 
                    <article key={product.id}>
                        <h3>{product.title} | {product.price}€</h3>
                        <QuantityPicker quantity={product.quantity} onClickPlus={product.increment} onClickMinus={product.decrement} />
                        <Button title="supprimer" callback={() => removeFromCart(product.id)}/>
                    </article>)}
            </ul>
        </main>
    )
})

export default Cart;