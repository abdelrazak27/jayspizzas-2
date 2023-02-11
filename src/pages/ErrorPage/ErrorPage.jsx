import { useRouteError } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton";

const ErrorPage = () => {

    const { statusText, message } = useRouteError();

    return (
        <main>
            <h2>IMAGE ICI</h2>
            <p>{statusText === "Not Found" ? "Désolé, la page que vous recherchez n'existe pas ou n'est plus disponible. Veuillez vérifier l'adresse URL et réessayer ou retourner à la page d'accueil pour explorer d'autres options." : statusText || message}</p>
            <BackButton />
        </main>
    )
}

export default ErrorPage;