import pizza1 from "../images/pizza1.png";
import pizza2 from "../images/pizza2.png";
import pizza3 from "../images/pizza3.png";
import pizza4 from "../images/pizza4.png";
import pizza5 from "../images/pizza5.png";
import pizza6 from "../images/pizza6.png";
import pizza7 from "../images/pizza7.png";
import pizza8 from "../images/pizza8.png";
import pizza9 from "../images/pizza9.png";
import boisson1 from "../images/boisson1.png";
import boisson2 from "../images/boisson2.png";
import brownie from "../images/brownie.png";

export const PRODUCTS = [
    {
        id: 1,
        title: "Margherita",
        category: "pizza",
        image: {
            src: pizza1,
            alt: "illustration pizza"
        },
        ingredients: [
            {
                name: "mozzarella",
                isSelected: true
            }
        ],
        base: "sauce tomate",
        allergenes: ["lactose","gluten","oeufs"],
        price: 6.90
    },
    {
        id: 2,
        title: "Végératienne",
        category: "pizza",
        image: {
            src: pizza2,
            alt: "illustration pizza"
        },
        ingredients: [
            {
                name: "mozzarella",
                isSelected: true
            },
            {
                name: "poivrons",
                isSelected: true
            },
            {
                name: "tomates",
                isSelected: true
            },
            {
                name: "olives",
                isSelected: true
            },
            {
                name: "oignons",
                isSelected: true
            },
            {
                name: "champignons",
                isSelected: true
            },
            {
                name: "origan",
                isSelected: true
            }
        ],
        base: "sauce tomate",
        allergenes: ["lactose","gluten","oeufs"],
        price: 6.90
    },
    {
        id: 3,
        title: "La basilic",
        category: "pizza",
        image: {
            src: pizza3,
            alt: "illustration pizza"
        },
        ingredients: [
            {
                name: "mozzarella",
                isSelected: true
            },
            {
                name: "tomates séchées",
                isSelected: true
            },
            {
                name: "basilic",
                isSelected: true
            }
        ],
        base: "sauce tomate",
        allergenes: ["lactose","gluten","oeufs"],
        price: 6.90
    },
    {
        id: 4,
        title: "Veggie Roquette",
        category: "pizza",
        image: {
            src: pizza4,
            alt: "illustration pizza"
        },
        ingredients: [
            {
                name: "mozzarella",
                isSelected: true
            },
            {
                name: "poivrons",
                isSelected: true
            },
            {
                name: "tomates",
                isSelected: true
            },
            {
                name: "olives",
                isSelected: true
            },
            {
                name: "roquette",
                isSelected: true
            },
        ],
        base: "sauce tomate",
        allergenes: ["lactose","gluten","oeufs"],
        price: 6.90
    },
    {
        id: 5,
        title: "Veggie Spicy",
        category: "pizza",
        image: {
            src: pizza5,
            alt: "illustration pizza"
        },
        ingredients: [
            {
                name: "mozzarella",
                isSelected: true
            },
            {
                name: "pommes de terre",
                isSelected: true
            },
            {
                name: "oignons",
                isSelected: true
            },
            {
                name: "maïs",
                isSelected: true
            },
            {
                name: "origan",
                isSelected: true
            },
            {
                name: "jalapeños",
                isSelected: true
            },
        ],
        base: "sauce tomate",
        allergenes: ["lactose","gluten","oeufs"],
        price: 6.90
    },
    {
        id: 6,
        title: "Reine",
        category: "pizza",
        image: {
            src: pizza6,
            alt: "illustration pizza"
        },
        ingredients: [
            {
                name: "mozzarella",
                isSelected: true
            },
            {
                name: "jambon de dinde",
                isSelected: true
            },
            {
                name: "champignons",
                isSelected: true
            },
        ],
        base: "sauce tomate",
        allergenes: ["lactose","gluten","oeufs"],
        price: 6.90
    },
    {
        id: 7,
        title: "Hawaienne",
        category: "pizza",
        image: {
            src: pizza7,
            alt: "illustration pizza"
        },
        ingredients: [
            {
                name: "mozzarella",
                isSelected: true
            },
            {
                name: "jambon de dinde",
                isSelected: true
            },
            {
                name: "ananas",
                isSelected: true
            },
        ],
        base: "sauce tomate",
        allergenes: ["lactose","gluten","oeufs"],
        price: 6.90
    },
    {
        id: 8,
        title: "Paysanne",
        category: "pizza",
        image: {
            src: pizza8,
            alt: "illustration pizza"
        },
        ingredients: [
            {
                name: "mozzarella",
                isSelected: true
            },
            {
                name: "jambon de dinde",
                isSelected: true
            },
            {
                name: "oignons",
                isSelected: true
            },
            {
                name: "pommes de terre",
                isSelected: true
            },
        ],
        base: "crème fraîche",
        allergenes: ["lactose","gluten","oeufs"],
        price: 6.90
    },
    {
        id: 9,
        title: "Chorizo",
        category: "pizza",
        image: {
            src: pizza9,
            alt: "illustration pizza"
        },
        ingredients: [
            {
                name: "mozzarella",
                isSelected: true
            },
            {
                name: "chorizo",
                isSelected: true
            },
        ],
        base: "sauce tomate",
        allergenes: ["lactose","gluten","oeufs"],
        price: 6.90
    },
    {
        id: 10,
        title: "Antillaise",
        category: "pizza",
        image: {
            src: pizza1,
            alt: "illustration pizza"
        },
        ingredients: [
            {
                name: "mozzarella",
                isSelected: true
            },
            {
                name: "fruits de mer",
                isSelected: true
            },
            {
                name: "poulet",
                isSelected: true
            },
            {
                name: "champignons",
                isSelected: true
            },
            {
                name: "olives",
                isSelected: true
            },
        ],
        base: "sauce colombo",
        allergenes: ["lactose","gluten","oeufs"],
        price: 8.90
    },
    {
        id: 11,
        title: "Pimento",
        category: "pizza",
        image: {
            src: pizza1,
            alt: "illustration pizza"
        },
        ingredients: [
            {
                name: "mozzarella",
                isSelected: true
            },
            {
                name: "poulet",
                isSelected: true
            },
            {
                name: "chorizo",
                isSelected: true
            },
            {
                name: "olives",
                isSelected: true
            },
        ],
        base: "sauce chili thaï",
        allergenes: ["lactose","gluten","oeufs"],
        price: 8.90
    },
    {
        id: 12,
        title: "La miel",
        category: "pizza",
        image: {
            src: pizza2,
            alt: "illustration pizza"
        },
        ingredients: [
            {
                name: "mozzarella",
                isSelected: true
            },
            {
                name: "miel",
                isSelected: true
            },
            {
                name: "jambon de dinde",
                isSelected: true
            },
            {
                name: "merguez",
                isSelected: true
            },
            {
                name: "poivrons",
                isSelected: true
            },
        ],
        base: "crème fraîche",
        allergenes: ["lactose","gluten","oeufs"],
        price: 8.90
    },
    {
        id: 13,
        title: "Indienne",
        category: "pizza",
        image: {
            src: pizza3,
            alt: "illustration pizza"
        },
        ingredients: [
            {
                name: "mozzarella",
                isSelected: true
            },
            {
                name: "viande hachée",
                isSelected: true
            },
            {
                name: "poulet",
                isSelected: true
            },
            {
                name: "maïs",
                isSelected: true
            },
        ],
        base: "sauce curry",
        allergenes: ["lactose","gluten","oeufs"],
        price: 8.90
    },
    {
        id: 14,
        title: "Bollywood",
        category: "pizza",
        image: {
            src: pizza4,
            alt: "illustration pizza"
        },
        ingredients: [
            {
                name: "mozzarella",
                isSelected: true
            },
            {
                name: "fruits de mer",
                isSelected: true
            },
            {
                name: "poulet",
                isSelected: true
            },
            {
                name: "champignons",
                isSelected: true
            },
            {
                name: "olives",
                isSelected: true
            },
        ],
        base: "sauce curry",
        allergenes: ["lactose","gluten","oeufs"],
        price: 8.90
    },
    {
        id: 15,
        title: "Boursin",
        category: "pizza",
        image: {
            src: pizza5,
            alt: "illustration pizza"
        },
        ingredients: [
            {
                name: "mozzarella",
                isSelected: true
            },
            {
                name: "sauce boursin",
                isSelected: true
            },
            {
                name: "poulet",
                isSelected: true
            },
            {
                name: "champignons",
                isSelected: true
            },
        ],
        base: "crème fraîche",
        allergenes: ["lactose","gluten","oeufs"],
        price: 8.90
    },
    {
        id: 16,
        title: "Marocaine",
        category: "pizza",
        image: {
            src: pizza6,
            alt: "illustration pizza"
        },
        ingredients: [
            {
                name: "mozzarella",
                isSelected: true
            },
            {
                name: "viande hachée",
                isSelected: true
            },
            {
                name: "merguez",
                isSelected: true
            },
            {
                name: "poivrons",
                isSelected: true
            },
            {
                name: "olives",
                isSelected: true
            },
        ],
        base: "sauce marocaine",
        allergenes: ["lactose","gluten","oeufs"],
        price: 8.90
    },
    {
        id: 17,
        title: "Chicken",
        category: "pizza",
        image: {
            src: pizza7,
            alt: "illustration pizza"
        },
        ingredients: [
            {
                name: "mozzarella",
                isSelected: true
            },
            {
                name: "poulet",
                isSelected: true
            },
            {
                name: "pommes de terre",
                isSelected: true
            },
        ],
        base: "crème fraîche",
        allergenes: ["lactose","gluten","oeufs"],
        price: 8.90
    },
    {
        id: 18,
        title: "Je crée ma pizza",
        // tous, mais isSelected à false par défaut (voir site de fivepizza)
        category: "pizza",
        image: {
            src: pizza8,
            alt: "illustration pizza"
        },
        ingredients: [
            {
                name: "mozzarella",
                isSelected: false
            },
            {
                name: "poivrons",
                isSelected: false
            },
            {
                name: "tomates",
                isSelected: false
            },
            {
                name: "olives",
                isSelected: false
            },
            {
                name: "oignons",
                isSelected: false
            },
            {
                name: "champignons",
                isSelected: false
            },
            {
                name: "origan",
                isSelected: false
            },
            {
                name: "tomates séchées",
                isSelected: false
            },
            {
                name: "basilic",
                isSelected: false
            },
            {
                name: "roquette",
                isSelected: false
            },
            {
                name: "pommes de terre",
                isSelected: false
            },
            {
                name: "maïs",
                isSelected: false
            },
            {
                name: "jalapeños",
                isSelected: false
            },
            {
                name: "jambon de dinde",
                isSelected: false
            },
            {
                name: "ananas",
                isSelected: false
            },
            {
                name: "fruits de mer",
                isSelected: false
            },
            {
                name: "thon",
                isSelected: false
            },
            {
                name: "viande hachée",
                isSelected: false
            },
            {
                name: "poulet",
                isSelected: false
            },
            {
                name: "chorizo",
                isSelected: false
            },
            {
                name: "piment rouge",
                isSelected: false
            },
            {
                name: "miel",
                isSelected: false
            },
            {
                name: "sauce boursin",
                isSelected: false
            },
            {
                name: "merguez",
                isSelected: false
            },
            {
                name: "champignons",
                isSelected: false
            },
            {
                name: "crème fraîche",
                isSelected: false
            },
        ],
        base: "crème fraîche",
        allergenes: ["gluten","oeufs"],
        price: 10.90
    },
    {
        id: 19,
        title: "Cristaline",
        category: "boisson",
        image: {
            src: boisson1,
            alt: "canette vert"
        },
        price: 2.50
    },
    {
        id: 20,
        title: "Perrier",
        category: "boisson",
        image: {
            src: boisson2,
            alt: "canette rouge"
        },
        price: 2.50
    },
    {
        id: 21,
        title: "Coca Cola",
        category: "boisson",
        image: {
            src: boisson1,
            alt: "canette vert"
        },
        price: 3.50
    },
    {
        id: 22,
        title: "Coca Cola Zero",
        category: "boisson",
        image: {
            src: boisson2,
            alt: "canette rouge"
        },
        price: 3.50
    },
    {
        id: 23,
        title: "Fanta",
        category: "boisson",
        image: {
            src: boisson2,
            alt: "canette rouge"
        },
        price: 3.50
    },
    {
        id: 24,
        title: "Sprite",
        category: "boisson",
        image: {
            src: boisson1,
            alt: "canette vert"
        },
        price: 3.50
    },
    {
        id: 25,
        title: "Orangina",
        category: "boisson",
        image: {
            src: boisson2,
            alt: "canette rouge"
        },
        price: 3.50
    },
    {
        id: 26,
        title: "Brownie",
        category: "dessert",
        image: {
            src: brownie,
            alt: "brownie"
        },
        allergenes: ["lactose","gluten","oeufs","noix"],
        price: 4.90
    },
    {
        id: 27,
        title: "Tiramisu",
        category: "dessert",
        image: {
            src: brownie,
            alt: "brownie"
        },
        allergenes: ["lactose","gluten","oeufs"],
        price: 4.90
    },
    {
        id: 28,
        title: "Sundae",
        category: "dessert",
        image: {
            src: brownie,
            alt: "brownie"
        },
        allergenes: ["lactose","gluten","oeufs"],
        price: 4.90
    },
    {
        id: 29,
        title: "Milkshake",
        category: "dessert",
        image: {
            src: brownie,
            alt: "brownie"
        },
        allergenes: ["lactose","gluten","oeufs"],
        price: 4.90
    }
]