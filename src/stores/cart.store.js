import { getRoot, types } from "mobx-state-tree";

const Ingredients = types.model("Ingredients", {
    name: types.string,
    isSelected: types.boolean
})

const CartProduct = types.model("CartProduct", {
    id: types.number,
    title: types.string,
    price: types.number,
    category: types.string,
    base: types.optional(types.string, ''),
    allergenes: types.optional(types.array(types.string), []),
    ingredients: types.optional(types.array(Ingredients), []),
    quantity: types.number
})
    .actions((self) => ({
        increment() {
            self.quantity += 1;
        },
        decrement() {
            const { cart: { removeFromCart } } = getRoot(self);
            if (self.quantity <= 1) {
                removeFromCart(self.id);
            }
            else {
                self.quantity -= 1;
            }
        }
    }))
    .views((self) => ({
        get totalPrice() {
            return self.quantity * self.price;
        }
    }));

export const CartStore = types.model("CartStore", {
    products: types.array(CartProduct)
})

    // export const getProduct = (id) => {
    //     return PRODUCTS.find((product) => {
    //         return product.datas.find((item) => item.id === id)
    //     })
    // }

    // const foundProduct = self.products.find(p => p.id === product.id);

    .actions((self) => ({
        // fonction pour modifier les valeurs de notre store
        addToCart(product) {
            console.log(self.products);
            const foundProduct = self.products.find(p => p.id === product.id);
            if (foundProduct) {
                foundProduct.quantity += product.quantity;
            }
            else {
                self.products.push(product);
            }
        },
        removeFromCart(productId) {
            const product = self.products = self.products.filter((product) => product.id !== productId);
            self.products.remove(product);
        },
        resetCart() {
            self.products.clear();
        }
    }))
    .views((self) => ({
        get totalPrice() {
            return self.products.reduce((acc, currentP) => {
                return acc + currentP.totalPrice
            }, 0)
        },
        get productTotalQuantity() {
            return self.products.reduce((acc, currentP) => acc + currentP.quantity, 0)
        }
    }));

export const cartStore = CartStore.create({
    products: []
});