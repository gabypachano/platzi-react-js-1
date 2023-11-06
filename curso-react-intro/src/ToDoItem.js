import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";
import "./ToDoItem.css";

function ToDoItem(props) {
  return (
    <div>
      <li className="ToDoItem">
        <CompleteIcon />
        {/* <span
          className={`Icon Icon-check ${
            props.completed && "Icon-check--active"
          }`}
          onClick={props.onComplete}
        >
          V
        </span> */}
        <p
          className={`ToDoItem-p ${props.completed && "ToDoItem-p--complete"}`}
        >
          {props.text}
        </p>
        <DeleteIcon />
        {/* <span className="Icon Icon-delete" onClick={props.onDelete}>
          X
        </span> */}
      </li>
    </div>
  );
}

export { ToDoItem };
