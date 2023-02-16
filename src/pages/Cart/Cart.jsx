import { observer } from "mobx-react-lite";
import Button from "../../components/Button/Button";
import QuantityPicker from "../../components/QuantityPicker/QuantityPicker";
import { useStore } from "../../contexts/store.context";
import feuilles from "../../images/feuilles.png";
import feuille from "../../images/feuille.png";

import styleApp from "../../App.module.scss";
import style from "./Cart.module.scss";
import { Link } from "react-router-dom";


const Cart = observer(() => {

    const { cart } = useStore();
    const { products, removeFromCart, totalPrice, resetCart } = cart;

    const priceTotalFormatted = (totalPrice.toFixed(2) + "€").replace(".", ",");

    return (
        <main>
            <section id={style.sectionCart} className={styleApp.sectionColored}>
                <img className={style.feuilles} src={feuilles} alt="" />
                <img className={style.feuille} src={feuille} alt="" />
                <h1>Voyons ce qu'il y a dans votre <span>panier</span>...</h1>

                {products.map((product) =>
                    <article className={style.produit} key={product.id}>
                        <div className={style.produitInfos}>
                            <h3>{product.title}</h3>
                            <p>{product.price.toFixed(2) + "€".replace(".", ",")} l'unité</p>
                        </div>
                        <div className={style.produitButtons}>
                            <QuantityPicker quantity={product.quantity} onClickPlus={product.increment} onClickMinus={product.decrement} />
                            <Button title="supprimer" callback={() => removeFromCart(product.id)} />
                        </div>
                    </article>
                )}

                {priceTotalFormatted !== "0,00€" ? <p className={style.totalDisplayText}>Nous avons un total de <span>{priceTotalFormatted}</span> !</p> : <p className={style.totalDisplayText}>Faut commander, chakal !</p>}

                {priceTotalFormatted !== "0,00€" &&
                    <div className={style.cartButtons}>
                        <Button
                            title="Tout effacer"
                            callback={resetCart}
                        />
                        <Link to="/paiement">
                            <Button title="Commander" />
                        </Link>
                    </div>
                }
            </section>
        </main>

    )

})

export default Cart;