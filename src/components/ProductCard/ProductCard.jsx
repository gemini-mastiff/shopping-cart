import { useState } from "react";
import "./ProductCard.css";

export default function ProductCard({ id, img, price, title, desc }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity - 1 < 1) setQuantity(1);
    else setQuantity(quantity - 1);
  };

  return (
    <div className="product-card">
      <img className="product__img" src={img} alt={title} />
      <div className="product__header">
        <h4 className="product__title">{title}</h4>
        <p className="product__price">£{price}</p>
      </div>
      <p className="product__desc">{desc}</p>
      <div className="product-buttons-container">
        <div className="quantity-container">
          <button className="decrement__btn" onClick={handleDecrement}>
            -
          </button>
          <p className="quanitity__counter">{quantity}</p>
          <button className="increment-btn" onClick={handleIncrement}>
            +
          </button>
        </div>
        <div className="add-item-btn">Add to Cart</div>
      </div>
    </div>
  );
}
