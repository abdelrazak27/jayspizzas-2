import style from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStore } from "../../contexts/store.context";


const Header = observer(() => {

    const {cart: {productTotalQuantity}} = useStore();

    const navStyle = ({isActive}) => isActive ? style.activeLink : null;


    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink className={navStyle} to="/">Home</NavLink></li>
                    <li><NavLink className={navStyle} to="/contact">Contact</NavLink></li>
                    <li><NavLink className={navStyle} to="/products">Products</NavLink></li>
                    <li><NavLink className={navStyle} to="/panier">Panier ({productTotalQuantity})</NavLink></li>
                </ul>
            </nav>
        </header>
    )
})

export default Header;