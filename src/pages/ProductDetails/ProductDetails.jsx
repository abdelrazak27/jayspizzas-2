import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton";
import Button from "../../components/Button/Button";
import QuantityPicker from "../../components/QuantityPicker/QuantityPicker";
import { useStore } from "../../contexts/store.context";
import { getProduct } from "../../services/products.service";

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
    const {id, title, price, base, ingredients, allergenes} = useLoaderData();
    const {cart: {addToCart}}= useStore();
    const [quantity, setQuantity] = useState(1);
    const [selectedIngredients, setSelectedIngredients] = useState(ingredients && ingredients.map(ingredient => ingredient.isSelected));




    return (
        <main>
            <BackButton />
            <h1>{title} - {price}€</h1>
            <p>{base}</p>
            <p>Allergènes : {allergenes && allergenes.map((allergene, index) => (
                <span key={index}>
                    {allergene}, 
                </span>
            ))}
            </p>
            {ingredients && ingredients.map((ingredient, index) => (
                <div key={index}>
                    <p>
                        {ingredient.name} ({selectedIngredients[index] ? "séléctionné" : "retiré"})
                        {id === 18 && selectedIngredients[index] === true && ingredient.name === "mozzarella" ? "Cet ingrédient peut causer des allergies (lactose)" : ""}
                    </p>
                    <Button title={selectedIngredients[index] ? "-" : "+"} callback={() => setSelectedIngredients(
                        selectedIngredients.map((selected, i) => i === index ? !selected : selected)
                    )}/>
                </div>
            ))}
            <QuantityPicker quantity={quantity} onClickPlus={() => setQuantity(quantity + 1)} onClickMinus={() => setQuantity(quantity - 1)}/>
            <Button title="Ajouter au panier" callback={() => addToCart({...product, quantity})}/>
        </main>
    )
}

export default ProductDetails;