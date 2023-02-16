import feuilles from "../../images/feuilles.png";
import feuille from "../../images/feuille.png";

import styleApp from "../../App.module.scss";
import style from "./Contact.module.scss";

const Contact = () => {
    return (
        <main>
            <section id={style.sectionContact} className={styleApp.sectionColored}>
                <img className={style.feuilles} src={feuilles} alt="" />
                <img className={style.feuille} src={feuille} alt="" />
                <p>Retrouvez nous à <span>Rue du Dahomey à Paris 11e (75011)</span>, si vous souhaitez nous contacter physiquement.<br />N'hésitez pas non plus à nous appeler par téléphone au <span>01 23 45 67 89</span> ou à nous envoyer un message à l'adresse mail suivante : <span>contact@jayspizzas.fr</span>.</p>
            </section>
        </main>
    )
}

export default Contact;