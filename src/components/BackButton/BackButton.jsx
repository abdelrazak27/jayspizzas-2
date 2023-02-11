import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <button onClick={goBack}>retour</button>
    )
}

export default BackButton;