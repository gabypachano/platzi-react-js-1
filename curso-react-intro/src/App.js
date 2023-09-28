import "./App.css";
import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoItem } from "./ToDoItem";
import { CreateToDoButton } from "./CreateToDoButton";
import { ToDoList } from "./ToDoList";

const defaultToDos = [
  { text: "Orar a diario", completed: true },
  { text: "Salir a la rambla con Kay", completed: true },
  { text: "Hacer la torta", completed: true },
  { text: "Ver el amanecer/atardecer", completed: true },
];

function App() {
  return (
    <div className="App">
      <ToDoCounter completed={16} total={22} />
      <ToDoSearch />

      <ToDoList>
        {defaultToDos.map((todo) => (
          <ToDoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </ToDoList>

      {<CreateToDoButton />}
    </div>
  );
}

export default App;
