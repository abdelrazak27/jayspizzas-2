import { useLoaderData } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { getProducts } from "../../services/products.service";
import styleApp from "../../App.module.scss";
import style from "./Products.module.scss";

import feuilles from "../../images/feuilles.png";
import feuille from "../../images/feuille.png";

export const productsLoader = async () => {
    const products = await getProducts();
    return products;
}

const Products = () => {
    const products = useLoaderData();
    return (
        <main>
            <section id={style.sectionHeader} className={styleApp.sectionColored}>
                <img className={style.feuilles} src={feuilles} alt="" />
                <img className={style.feuille} src={feuille} alt="" />
                <p>Préparez-vous à déguster les meilleurs pizzas, boissons rafraîchissantes et desserts délicieux de la ville.
                    <br />Chacun de nos produits a été soigneusement sélectionné pour vous offrir une expérience culinaire inoubliable.</p>
            </section>
            <section id={style.sectionListProducts}>
                <h1 id="pizzas" className={style.categoryTitle}>Nos <span>pizzas</span></h1>
                <div className={style.categoryProducts}>
                    {products.filter(product => product.category === "pizza").map((product) => {
                        return (
                            <article key={product.id}>
                                <ProductCard
                                    id={product.id}
                                    title={product.title}
                                    price={product.price}
                                    ingredients={product.ingredients}
                                    imageSrc={product.image.src}
                                    imageAlt={product.image.alt}
                                    buttonText="Ajouter au panier"
                                />
                            </article>
                        )
                    })}
                </div>

                <h1 id="boissons" className={style.categoryTitle}>Nos <span>boissons</span></h1>
                <div className={style.categoryProducts}>
                    {products.filter(product => product.category === "boisson").map((product) => {
                        return (
                            <article key={product.id}>
                                <ProductCard
                                    id={product.id}
                                    title={product.title}
                                    price={product.price}
                                    ingredients={product.ingredients}
                                    imageSrc={product.image.src}
                                    imageAlt={product.image.alt}
                                    buttonText="Ajouter au panier"
                                />
                            </article>
                        )
                    })}
                </div>

                <h1 id="desserts" className={style.categoryTitle}>Nos <span>desserts</span></h1>
                <div className={style.categoryProducts}>
                    {products.filter(product => product.category === "dessert").map((product) => {
                        return (
                            <article key={product.id}>
                                <ProductCard
                                    id={product.id}
                                    title={product.title}
                                    price={product.price}
                                    ingredients={product.ingredients}
                                    imageSrc={product.image.src}
                                    imageAlt={product.image.alt}
                                    buttonText="Ajouter au panier"
                                />
                            </article>
                        )
                    })}
                </div>

            </section>
        </main>
    )
}

export default Products;