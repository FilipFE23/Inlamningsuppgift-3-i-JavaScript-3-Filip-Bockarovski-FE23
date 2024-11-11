import { useState } from "react";

export default function SearchBar() {
  const [query, SetQuery] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => SetQuery(e.target.value)}
      />
      <button onClick={() => SetQuery("")}>Search</button>
      <p>{query}</p>
    </>
  );
}
