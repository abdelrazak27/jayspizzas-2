import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const BackButton = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return (
        <Button title="retour" callback={goBack} />
    )
}

export default BackButton;