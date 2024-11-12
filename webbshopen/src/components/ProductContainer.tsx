import Product from "./Product";
import ProductContainerProps from "../types/ProductContainerProps";
import ProductData from "../products.json"

export default function ProductContainer(props: ProductContainerProps) {
  const filteredProductsList = ProductData.filter((product) => (
    product.name.toLowerCase().includes(props.query.toLowerCase())
  ))

  return (
    <>
      {filteredProductsList.length > 0 ? (
        filteredProductsList.map((product) => (
          <Product key={product.id} name={product.name} price={product.price} description={product.description}/>
        ))
      ) : (
        <p>No Results</p>
      )}
      <p>ProductContainer: {props.query}</p>
    </>
  );
}
