import React from "react";
import "./App.css";
import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoItem } from "./ToDoItem";
import { CreateToDoButton } from "./CreateToDoButton";
import { ToDoList } from "./ToDoList";

const defaultToDos = [
  { text: "Orar a diario", completed: true },
  { text: "Salir a la rambla con Kay", completed: true },
  { text: "Hacer LA torta", completed: true },
  { text: "Ver el amanecer/atardecer", completed: false },
  { text: "Cenar", completed: true },
];

function App() {
  const [toDos, setToDos] = React.useState(defaultToDos);
  const [searchValue, setSearchValue] = React.useState("");
  console.log("Los usuarios buscan todos de " + searchValue);

  const completedToDos = toDos.filter((todo) => !!todo.completed).length;
  const totalToDos = toDos.length;

  const searchedToDos = toDos.filter((todo) => {
    const toDoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return toDoText.includes(searchText);
  });

  return (
    <div className="App">
      <ToDoCounter completed={completedToDos} total={totalToDos} />
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <ToDoList>
        {searchedToDos.map((todo) => (
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
