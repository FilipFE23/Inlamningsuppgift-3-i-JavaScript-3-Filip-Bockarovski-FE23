import Product from "./Product";
import ProductContainerProps from "../types/ProductContainerProps";
import ProductData from "../products.json";

export default function ProductContainer(props: ProductContainerProps) {
  const filteredProductsList = ProductData.filter((product) =>
    product.name.toLowerCase().includes(props.query.toLowerCase())
  );

  return (
    <>
      <h2>Search Result: {props.query}</h2>
      <div className="container">
        {filteredProductsList.length > 0 ? (
          filteredProductsList.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          ))
        ) : (
          <p>No Results</p>
        )}
      </div>
    </>
  );
}
