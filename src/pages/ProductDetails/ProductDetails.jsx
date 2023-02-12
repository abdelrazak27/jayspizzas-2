import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton";
import Button from "../../components/Button/Button";
import QuantityPicker from "../../components/QuantityPicker/QuantityPicker";
import { useStore } from "../../contexts/store.context";
import { getProduct } from "../../services/products.service";
import styleApp from "../../App.module.scss";
import style from "./ProductDetails.module.scss";

import feuilles from "../../images/feuilles.png";
import feuille from "../../images/feuille.png";

export const productLoader = async ({params}) => {
    const product = await getProduct(+params.productId);
    if(!product) {
        throw new Response ("", {
            status: 404,
            statusText: "Désolé, ce produit n'existe pas ou n'est plus disponible."
        })
    }
    return product;
}


const ProductDetails = () => {
    const product = useLoaderData();
    const {id, title, price, base, ingredients, allergenes, image} = useLoaderData();
    const {cart: {addToCart}}= useStore();
    const [quantity, setQuantity] = useState(1);
    const [selectedIngredients, setSelectedIngredients] = useState(ingredients && ingredients.map(ingredient => ingredient.isSelected));
    const priceFormatted = (price.toFixed(2) + "€").replace(".", ",");
    const allergenesList = allergenes ? (allergenes.length > 0 ? allergenes.slice(0, -1).join(", ") + " et " + allergenes.slice(-1) + "." : "") : "aucun.";

    return (
        <main>
            <section className={styleApp.sectionColored}>
                <img className={style.feuilles} src={feuilles} alt=""/>
                <img className={style.feuille} src={feuille} alt=""/>
                <BackButton />
                <div className={style.sectionDivided}>
                    <div className={style.sectionLeft}>
                        <img src={image.src} alt={image.alt} />
                    </div>
                    <div className={style.sectionRight}>
                        <div className={style.infosProduct}>
                            <h3>{title} <span>{priceFormatted}</span></h3>
                            <p>{base ? `Base : ${base}` : ""}</p>
                            <p>{allergenes ? `Allergènes : ${allergenesList}`: ""}</p>
                        </div>

                        <div className={style.ingredients}>
                        <h5>{ingredients ? `Choisissez vos ingrédients` : ""}</h5>

                        {ingredients && ingredients.map((ingredient, index) => (
                            <div key={index}>
                                <p>
                                    {ingredient.name}
                                    <br />
                                    <span>{id === 18 && selectedIngredients[index] === true && ingredient.name === "mozzarella" ? "Cet ingrédient peut causer des allergies (lactose)" : ""}</span>
                                </p>
                                <Button selected={selectedIngredients[index]} title={selectedIngredients[index] ? <i className='bx bx-check'></i> : <i className='bx bx-x'></i>} callback={() => setSelectedIngredients(
                                    selectedIngredients.map((selected, i) => i === index ? !selected : selected)
                                )}/>
                            </div>
                        ))}
                        </div>
                        
                        <div className={style.underSection}>
                            <div className={style.quantityPicker}>
                                <QuantityPicker quantity={quantity} onClickPlus={() => setQuantity(quantity + 1)} onClickMinus={() => setQuantity(quantity - 1)}/>
                            </div>
                            <div className={style.buttonAddCart}>
                                <Button title="Ajouter au panier" callback={() => addToCart({...product, quantity})}/>
                            </div>                            
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ProductDetails;