import App from "../App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "../pages/Contact/Contact";
import Products, { productsLoader } from "../pages/Products/Products";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ProductDetails, { productLoader } from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Paiement from "../pages/Paiement/Paiement";
import Recapitulatif from "../pages/Recapitulatif/Reacapitulatif";

const AppRouter = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
            children: [
                {
                    errorElement: <ErrorPage />,
                    children: [
                        {
                            index: true,
                            element: <Home />
                        },
                        {
                            path: "/contact",
                            element: <Contact />
                        },
                        {
                            path: "/products",
                            element: <Products />,
                            loader: productsLoader
                        },
                        {
                            path: "/products/:productId",
                            element: <ProductDetails />,
                            loader: productLoader
                        },
                        {
                            path: "/panier",
                            element: <Cart />
                        },
                        {
                            path: "/Paiement",
                            element: <Paiement />
                        },
                        {
                            path: "/Recapitulatif",
                            element: <Recapitulatif />
                        }
                    ]
                }
            ]
        },
    ])

    return (
        <RouterProvider router={router} />
    );
}

export default AppRouter;