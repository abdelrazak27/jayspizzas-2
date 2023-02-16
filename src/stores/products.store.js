import { flow, types } from "mobx-state-tree";
import { getProducts } from "../services/products.service";

const Ingredients = types.model("Ingredients", {
    name: types.string,
    isSelected: types.boolean
})

const Product = types.model("Product", {
    id: types.number,
    title: types.string,
    price: types.number,
    category: types.string,
    base: types.optional(types.string, ''),
    allergenes: types.optional(types.array(types.string), []),
    ingredients: types.optional(types.array(Ingredients), [])
})

export const ProductsStore = types.model("ProductsStore", {
    products: types.array(Product),
})
    .actions((self) => ({
        loadProducts: flow(function* () {
            try {
                self.products = yield getProducts();
            } catch (err) {
                console.log(err)
            }
        }),
    }));

export const productsStore = ProductsStore.create({
    products: []
})