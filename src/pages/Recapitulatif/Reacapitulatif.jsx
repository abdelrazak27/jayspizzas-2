import { observer } from "mobx-react-lite";
import Button from "../../components/Button/Button";
import QuantityPicker from "../../components/QuantityPicker/QuantityPicker";
import { useStore } from "../../contexts/store.context";
import style from "./Recap.module.scss";
import styleApp from "../../App.module.scss";
import feuilles from "../../images/feuilles.png";
import feuille from "../../images/feuille.png";

import {useNavigate} from 'react-router-dom';

const Recap = observer(() => {

    const navigate = useNavigate();
    const {cart} = useStore();
    const {products, removeFromCart, totalPrice, resetCart} = cart;
   
    return (
        <main>
            <section id={style.sectionRecap} className={styleApp.sectionColored}>
            <img className={style.feuilles} src={feuilles} alt=""/>
            <img className={style.feuille} src={feuille} alt=""/>

            <h1>Voici  un récap' de votre commande :</h1>
        
           
              <ul>
                   {products.map((product) => 
                      <article key={product.id}>
                            <h3>{product.title} | {product.price}€ &nbsp;&nbsp; x {product.quantity} </h3> 
                           
                      </article>)}
                      <h3>Total : {totalPrice}€</h3>
                </ul>
                <h2>Nous remercions pour votre choix !</h2>
                <h2>Nous commençons tout de suite la préparation de votre commande.</h2>
                <div className={style.btn}>  <a href="/"> <button onClick={resetCart}>Quitter </button></a></div>
              

            </section>
        </main>
    )
})

export default Recap;