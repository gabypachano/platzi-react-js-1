import "./ToDoSearch.css";

function ToDoSearch({ searchValue, setSearchValue }) {
  return (
    <div>
      <input
        placeholder="Orar a diario"
        className="ToDoSearch"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
  );
}

export { ToDoSearch };
