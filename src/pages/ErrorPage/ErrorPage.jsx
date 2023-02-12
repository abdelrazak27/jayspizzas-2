import { useRouteError } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton";
import styleApp from "../../App.module.scss";
import style from "./ErrorPage.module.scss";

const ErrorPage = () => {

    const { statusText, message } = useRouteError();

    return (
        <main id={`${statusText === "Not Found" ? style.mainErrorPage : ""}`}>
            <section className={`${styleApp.sectionColored} ${statusText === "Not Found" ? style.sectionErrorPage : style.sectionErrorOther}`}>
                <img src="https://imgs.search.brave.com/0Phbn0ycrNwDONqWQGJv_lNJc-8it55i87fHfmc2Zy0/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5z/bnV0LmZyL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE1LzA4L2lt/YWdlLWRlLXBheXNh/Z2UuanBn" alt="test" />
                <p className={style.errorMessage}>{statusText === "Not Found" ? "Oops, nous ne trouvons pas cette page !" : statusText || message}</p>
                <BackButton />
            </section>
        </main>
    )
}

export default ErrorPage;