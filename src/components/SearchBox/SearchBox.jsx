import css from "./SearchBox.module.css";
function SearchBox({ value, onChange }) {
  return (
    <label className={css.searchContainer}>
      Search contacts...
      <input
        className={css.inputSearch}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default SearchBox;
