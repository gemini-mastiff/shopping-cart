import { Link, Outlet } from "react-router-dom";
import cartSvg from "./assets/cart.svg";
import "./App.css";

function App() {
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
      <Outlet />
      <footer className="footer">
        <p>&copy; Joe Bloggs, 1842</p>
      </footer>
    </>
  );
}

export default App;
