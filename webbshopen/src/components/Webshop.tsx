import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductContainer from "./ProductContainer";
import CartContainer from "./CartContainer";
import { CartContext } from "../context/CartContext";

export default function Webshop() {
  const [searchResult, setSearchResult] = useState<string>("");
  const [productId, setProductId] = useState<number>();

  const handleSearch = (input: string): void => {
    return setSearchResult(input);
  };

  return (
    <>
      <header className="headerPadding separate">
        <h1>The Magic Store</h1>
        <div className="searchBar">
          <SearchBar onClick={handleSearch} />
        </div>
      </header>
      <CartContext.Provider value={{ productId, setProductId }}>
        <div className="container mainPageMargin">
          <main className="productList">
            <ProductContainer query={searchResult} />
          </main>
          <aside className="shoppingCart">
            <CartContainer />
          </aside>
        </div>
      </CartContext.Provider>
    </>
  );
}
