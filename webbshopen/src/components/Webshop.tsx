import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductContainer from "./ProductContainer";

export default function Webshop() {
  const [searchResult, setSearchResult] = useState<string>("");

  const handleSearch = (input: string): void => {
    return setSearchResult(input);
  };

  return (
    <>
      <header>
        <h1>The Magic Store</h1>
        <SearchBar onClick={handleSearch} />
      </header>
      <div>
        <main>
          <h2>Search Result</h2>
          <ProductContainer query={searchResult} />
        </main>
        <aside>
          <h2>Shopping Cart</h2>
        </aside>
      </div>
    </>
  );
}
