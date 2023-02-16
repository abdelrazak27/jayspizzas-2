import style from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStore } from "../../contexts/store.context";


const Header = observer(() => {

    const { cart: { productTotalQuantity } } = useStore();

    const navStyle = ({ isActive }) => isActive ? style.activeLink : null;


    return (
        <header>
            <nav className={style.navbar}>
                <div className={style.containerNavbar}>
                    <NavLink className={style.logo} to="/">Jay's Pizzas</NavLink>
                    <div className={style.navLinks}>
                        <NavLink className={navStyle} to="/">Accueil</NavLink>
                        <NavLink className={navStyle} to="/products">Produits</NavLink>
                        <NavLink className={navStyle} to="/contact">Contact</NavLink>
                        <NavLink className={navStyle} to="/panier"><i className='bx bxs-cart-alt'><span>{productTotalQuantity}</span></i></NavLink>
                    </div>
                </div>
            </nav>
        </header>
    )
})

export default Header;