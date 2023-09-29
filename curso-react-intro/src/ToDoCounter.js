import "./ToDoCounter.css";

function ToDoCounter({ completed, total }) {
  return (
    <div>
      <h1 className="ToDoCounter">
        Has completado <span>{completed}</span> de <span>{total}</span> TODOs
      </h1>
    </div>
  );
}

export { ToDoCounter };
