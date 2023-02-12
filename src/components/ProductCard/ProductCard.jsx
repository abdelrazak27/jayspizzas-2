import { Link } from "react-router-dom";
import Button from "../Button/Button";


const ProductCard = (props) => {
    const priceFormatted = (props.price.toFixed(2) + "€").replace(".", ",");
        return (
          <div className="product-card">
            <h3 className="product-title">{props.title}</h3>
            <p className="product-price">{priceFormatted}</p>
            {props.ingredients && (
                <div>
                    { props.id !== 18 && props.ingredients
                        .map(ingredient => ingredient.name[0] + ingredient.name.slice(1))
                        .join(", ") + "."}
                </div>
            )}
            <Link to={`/products/${props.id}`}>
            <Button title={props.buttonText}/> 
            </Link>
          </div>
        );
      };

export default ProductCard;