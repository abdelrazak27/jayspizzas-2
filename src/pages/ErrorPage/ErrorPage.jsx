import { useRouteError } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton";
import styleApp from "../../App.module.scss";
import style from "./ErrorPage.module.scss";
import image404 from "../../images/404.png"

const ErrorPage = () => {

    const { statusText, message } = useRouteError();

    return (
        <main id={`${statusText === "Not Found" ? style.mainErrorPage : ""}`}>
            <section className={`${styleApp.sectionColored} ${statusText === "Not Found" ? style.sectionErrorPage : style.sectionErrorOther}`}>
                <img src={image404} alt="" />
                <p className={style.errorMessage}>{statusText === "Not Found" ? "Oops, nous ne trouvons pas cette page !" : statusText || message}</p>
                <BackButton />
            </section>
        </main>
    )
}

export default ErrorPage;