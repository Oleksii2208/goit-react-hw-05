import { useState } from "react";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSubmit(query.trim());
    setQuery("");
  };
  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
        />
        <button className={s.button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
