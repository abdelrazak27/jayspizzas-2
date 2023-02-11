import { Link } from "react-router-dom";

const Home = () => {

    return (
        <main>
            <h1>Home fonctionne</h1>
            <Link to="/products">Voir nos produits</Link>
        </main>
    )
}

export default Home;