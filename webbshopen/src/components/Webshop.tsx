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
      <header>
        <h1>The Magic Store</h1>
        <SearchBar onClick={handleSearch} />
      </header>
      <CartContext.Provider value={{ productId, setProductId }}>
        <div className="container">
          <main>
            <ProductContainer query={searchResult} />
          </main>
          <aside>
            <CartContainer />
          </aside>
        </div>
      </CartContext.Provider>
    </>
  );
}
