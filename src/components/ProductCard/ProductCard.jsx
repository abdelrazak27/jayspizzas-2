import { Link } from "react-router-dom";
import Button from "../Button/Button";
import style from "./ProductCard.module.scss";


const ProductCard = (props) => {
  const priceFormatted = (props.price.toFixed(2) + "€").replace(".", ",");

  return (
    <div className={style.productCard}>
      <div className={style.productCardTitleAndPrice}>
        <img className={style.productCardImage} src={props.imageSrc} alt={props.imageAlt} />
        <h3 className={style.productCardTitle}>{props.title}</h3>
        <p className={style.productCardPrice}>{priceFormatted}</p>
      </div>
      <div className={style.productCardIngredients}>
        {props.ingredients && (
          <div>
            {props.id !== 18 && props.ingredients
              .map(ingredient => ingredient.name[0] + ingredient.name.slice(1))
              .join(", ") + "."}
          </div>
        )}
      </div>
      <Link className={style.productCardButton} to={`/products/${props.id}`}>
        <Button title={props.buttonText} />
      </Link>
    </div>
  );
};

export default ProductCard;