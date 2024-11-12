import { useState } from "react";
import SearchBarProps from "../types/SearchBarProps";

export default function SearchBar(props: SearchBarProps) {
  const [query, SetQuery] = useState<string>("");

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => SetQuery(e.target.value)}
      />
      <button
        onClick={() => {
          props.onClick(query);
          SetQuery("");
        }}
      >
        Search
      </button>
      <p>{query}</p>
    </>
  );
}
