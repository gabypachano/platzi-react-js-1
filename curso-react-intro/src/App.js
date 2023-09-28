import "./App.css";
import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoItem } from "./ToDoItem";
// import { CreateToDoButton } from "./CreateToDoButton";
import { ToDoList } from "./ToDoList";

function App() {
  return (
    <div className="App">
      <ToDoCounter />
      <ToDoSearch />

      <ToDoList>
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </ToDoList>

      {/* <CreateToDoButton /> */}
    </div>
  );
}

export default App;
