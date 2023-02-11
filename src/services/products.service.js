import { PRODUCTS } from "../mocks/products"

export const getProducts = async() => {
    return PRODUCTS;
}

export const getProduct = (id) => {
    return PRODUCTS.find((product) => product.id === id)
}