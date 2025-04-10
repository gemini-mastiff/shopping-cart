import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import cartSvg from "./assets/cart.svg";
import "./App.css";

function useProducts() {
  const [productArr, setProductArr] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setProductArr(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { productArr, error, loading };
}

function App() {
  const { productArr, error, loading } = useProducts();

  console.log(productArr);

  return (
    <>
      <div className="header">
        <div className="logo__bg">
          <div className="logo__container container">
            <h1 className="logo">LOGO</h1>
          </div>
        </div>
        <nav className="nav">
          <div className="nav__container container">
            <ul className="link__list link__list--primary">
              <li className="link__item">
                <Link to="/">HOME</Link>
              </li>
              <li className="link__item">
                <Link to="store">STORE</Link>
              </li>
            </ul>
            <ul className="link__list link__list--secondary">
              <li className="link__item">
                <Link className="cart__link" to="cart">
                  <img className="cart__icon" src={cartSvg} />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Outlet context={{ productArr, error, loading }} />
      <footer className="footer">
        <p>&copy; Joe Bloggs, 1842</p>
      </footer>
    </>
  );
}

export default App;
