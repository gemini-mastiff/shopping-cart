import { useOutletContext } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import "./Store.css";

export default function Store() {
  const { productArr, error } = useOutletContext();

  return (
    <div className="storepage">
      <div className="container">
        <h1>PRODUCTS</h1>
        <hr />
        <div className="products__container">
          {!productArr ? (
            error ? (
              <>
                <p>An Error has occurred.</p>
                <p>{error}</p>
              </>
            ) : (
              <p>Loading...</p>
            )
          ) : (
            productArr.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  img={product.image}
                  price={product.price}
                  desc={product.description}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
