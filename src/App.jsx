import "./App.css";

function App() {
  return (
    <>
      <div className="header">
        <div className="logo__container container">
          <h1 className="logo">LOGO</h1>
        </div>
      </div>
      <nav className="nav">
        <div className="nav__container container">
          <ul className="link__list link__list--primary">
            <li className="link__item">
              <a href="">HOME</a>
            </li>
            <li className="link__item">
              <a href="">STORE</a>
            </li>
          </ul>
          <ul className="link__list link__list--secondary">
            <li className="link__item">
              <a href="">CART</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default App;
