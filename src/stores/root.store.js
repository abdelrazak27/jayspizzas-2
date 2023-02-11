import {types} from "mobx-state-tree";
import {CartStore, cartStore} from "./cart.store";
import { productsStore, ProductsStore } from "./products.store";

export const RootStore = types.model({
    cart: CartStore,
    products: ProductsStore
})

export const rootStore = RootStore.create({
    cart: cartStore,
    products: productsStore
})