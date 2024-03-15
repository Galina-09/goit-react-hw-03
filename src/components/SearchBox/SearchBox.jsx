import css from "./SearchBox.module.css";

const SearchBox = ({ inputValue, onFilter }) => {
  return (
    <div className={css.filterInput}>
      <p>Find contacts by name</p>
      <input
        value={inputValue}
        onChange={(event) => onFilter(event.target.value)}
      ></input>
    </div>
  );
};

export default SearchBox;
