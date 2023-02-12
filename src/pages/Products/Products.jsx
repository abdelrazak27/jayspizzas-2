import { useLoaderData } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { getProducts } from "../../services/products.service";


export const productsLoader = async () => {
    const products = await getProducts();
    return products;
}

const Products = () => {
    const products = useLoaderData();
    return (
        <main>
            <h1>Nos Pizzas</h1>
            {products.filter(product => product.category === "pizza").map((product) => {
                return (
                    <article key={product.id}>
                        <ProductCard 
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        ingredients={product.ingredients}
                        buttonText="Ajouter au panier"
                        />
                    </article>
                )
            })}
            <h1>Nos Boissons</h1>
            {products.filter(product => product.category === "boisson").map((product) => {
                return (
                    <article key={product.id}>
                        <ProductCard 
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        ingredients={product.ingredients}
                        buttonText="Ajouter au panier"
                        />
                    </article>
                )
            })}
            <h1>Nos Desserts</h1>
            {products.filter(product => product.category === "dessert").map((product) => {
                return (
                    <article key={product.id}>
                        <ProductCard 
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        ingredients={product.ingredients}
                        buttonText="Ajouter au panier"
                        />
                    </article>
                )
            })}
        </main>
    )
}

export default Products;