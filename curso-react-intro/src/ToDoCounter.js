import "./ToDoCounter.css";

function ToDoCounter({ completed, total }) {
  return (
    <div>
      <h1>
        Has completado {completed} de {total} TODOs
      </h1>
    </div>
  );
}

export { ToDoCounter };
