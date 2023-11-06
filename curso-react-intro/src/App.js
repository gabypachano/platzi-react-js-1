import React from "react";
import "./App.css";
import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoItem } from "./ToDoItem";
import { CreateToDoButton } from "./CreateToDoButton";
import { ToDoList } from "./ToDoList";

const defaultToDos = [
  { text: "Orar a diario", completed: false },
  { text: "Salir a la rambla con Kay", completed: false },
  { text: "Hacer LA torta", completed: false },
  { text: "Ver el amanecer/atardecer", completed: false },
  { text: "Cenar", completed: true },
];

function App() {
  const [toDos, setToDos] = React.useState(defaultToDos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedToDos = toDos.filter((todo) => !!todo.completed).length;
  const totalToDos = toDos.length;

  const searchedToDos = toDos.filter((todo) => {
    const toDoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return toDoText.includes(searchText);
  });

  const toDoComplete = (text) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex((todo) => todo.text === text);
    newToDos[toDoIndex].completed = true;
    setToDos(newToDos);
  };

  const toDoDelete = (text) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex((todo) => todo.text === text);
    newToDos.splice(toDoIndex, 1);
    setToDos(newToDos);
  };

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
            onComplete={() => toDoComplete(todo.text)}
            onDelete={() => toDoDelete(todo.text)}
          />
        ))}
      </ToDoList>

      {<CreateToDoButton />}
    </div>
  );
}

export default App;
