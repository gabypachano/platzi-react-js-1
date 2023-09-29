import "./ToDoItem.css";

function ToDoItem(props) {
  return (
    <div>
      <li className="ToDoItem">
        <span
          className={`Icon Icon-check ${
            props.completed && "Icon-check--active"
          }`}
        >
          V
        </span>
        <p
          className={`ToDoItem-p ${props.completed && "ToDoItem-p--complete"}`}
        >
          {props.text}
        </p>
        <span className="Icon Icon-delete">X</span>
      </li>
    </div>
  );
}

export { ToDoItem };
