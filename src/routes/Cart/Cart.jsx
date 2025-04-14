import { useOutletContext } from "react-router-dom";
import delSvg from "../../assets/delete.svg";
import "./Cart.css";

export default function Cart() {
  const { productArr, cart, handleDel, handleQuantity } = useOutletContext();

  const cartProducts = cart.map((item) => {
    const product = productArr.find((product) => product.id === item.id);
    return {
      id: item.id,
      title: product.title,
      img: product.image,
      price: product.price,
      quantity: item.quantity,
      cost: Number(product.price * item.quantity).toFixed(2),
    };
  });
  const totalCost = Number(
    cartProducts.reduce((acc, item) => acc + Number(item.cost), 0)
  ).toFixed(2);

  return (
    <div className="cart">
      <div className="container page">
        <h1 className="cart__header">CART</h1>
        <hr />
        <div className="cart__container">
          {cartProducts.length < 1 ? (
            <p>Nothing here yet!</p>
          ) : (
            cartProducts.map((item) => {
              return (
                <div className="cart__card" key={item.id}>
                  <img className="cart__img" src={item.img} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>£{item.cost}</p>
                  <div className="quantity-container">
                    <button
                      className="decrement-btn"
                      onClick={() => handleQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <p className="quanitity__counter">{item.quantity}</p>
                    <button
                      className="increment-btn"
                      onClick={() => handleQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="del__btn"
                    onClick={() => handleDel(item.id)}
                  >
                    <img className="del__svg" src={delSvg} />
                  </button>
                </div>
              );
            })
          )}
        </div>
        <div className="checkout">
          {cartProducts.length < 1 ? null : (
            <>
              <hr />
              <p className="total__p">
                Total Cost: <span className="total__val">£{totalCost}</span>
              </p>
              <button className="checkout__btn">Checkout</button>{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
