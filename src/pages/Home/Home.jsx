import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import styleApp from "../../App.module.scss";
import style from "./Home.module.scss";

import feuilles from "../../images/feuilles.png";
import feuille from "../../images/feuille.png";
import pizzas from "../../images/pizzas.png";
import desserts from "../../images/desserts.png";
import boissons from "../../images/boissons.png";
import imageHome from "../../images/JAYS_PIZZAS.png"

const Home = () => {

    return (
        <main>
            <section className={`${styleApp.sectionColored} ${style.sectionDivided}`}>
                <img className={style.feuilles} src={feuilles} alt=""/>
                <img className={style.feuille} src={feuille} alt=""/>
                <div className={style.sectionLeft}>
                    <div>
                        <p>Rejoignez-nous pour une expérience gastronomique digne de l'Italie, où chaque bouchée de notre pizza vous transportera dans les rues de Napoli.</p>
                        <Link to="/products">
                            <Button title="nos produits"/>
                        </Link>
                    </div>
                    <div className={style.socials}>
                        <button className={style.social}><i className='bx bxl-facebook'></i></button>
                        <button className={style.social}><i className='bx bxl-instagram-alt'></i></button>
                        <button className={style.social}><i className='bx bxl-twitter'></i></button>
                    </div>
                </div>
                <div className={style.sectionRight}>
                    <img src={imageHome} alt="" />
                </div>
            </section>
            <section id={style.sectionPropositions}>
                <h2>Nous vous proposons ...</h2>
                <div className={style.categories}>
                    <div className={style.category}>
                        <Link to="/products#pizzas">
                            <img src={pizzas} alt="" />
                        </Link>
                        <p>De délicieuse <span>pizzas</span></p>
                    </div>
                    <div className={style.category}>
                        <Link to="/products#desserts">
                            <img src={desserts} alt="" />
                        </Link>
                        <p>De très bons <span>desserts</span></p>
                    </div>
                    <div className={style.category}>
                        <Link to="/products#boissons">
                            <img src={boissons} alt="" />
                        </Link>
                        <p>Des <span>boissons</span> fraîches</p>
                    </div>
                    
                </div>
            </section>
        </main>
    )
}

export default Home;