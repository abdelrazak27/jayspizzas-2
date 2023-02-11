import { Link, useLoaderData } from "react-router-dom";
import { getProducts } from "../../services/products.service";

export const productsLoader = async () => {
    const products = await getProducts();
    return products;
}

const Products = () => {
    const products = useLoaderData();
    return (
        <main>
            <h1>Products fonctionne</h1>
            {products.map((product) => {
                return (
                    <article key={product.id}>
                        <Link to={`/products/${product.id}`}>{product.title}</Link>
                    </article>
                )
            })}
        </main>
    )
}

export default Products;