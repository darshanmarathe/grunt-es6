import { dom, Fragment, memoize } from "../mact/index.js";

import { initState } from "./index";
// Todo Component
const Todo = (props) => {
  function renderTodo() {
    let todo = props.title == null ? "Junk data" : props.title;
    return todo;
  }

  function Delete_Click(e) {
    if (confirm("Do you want to delete this record ?")) {
      initState.actions.HandleDelete(e);
    }
  }

  function Done_Click(todo) {
    initState.actions.HandleDone(todo);
  }

  return (
    <li>
      {props.done === true ? <del> {renderTodo()} </del> : renderTodo()}
      <button
        onClick={(e) => {
          Delete_Click(props.id);
        }}
      >
        X
      </button>
      <button
        onClick={(e) => {
          Done_Click(props);
        }}
      >
        {props.done == true ? "undone" : "done"}
      </button>
      {props.desc != null && (
        <button
          onClick={(e) => {
            $("#" + props.id + "div").slideToggle();
            initState.actions.HandleOpenClose(props);
          }}
        >
          ...
        </button>
      )}
      <br />
      {props.desc != null && (
        <div
          onBlur={(e) => {
            var todo = {
              id: props.id,
              desc: e.target.innerHTML,
              isOpen: true,
            };

            initState.actions.HandleChange(todo);
          }}
          contentEditable="true"
          id={props.id + "div"}
          style={{ display: props.isOpen ? "block" : "none" }}
        >
          {props.desc}
        </div>
      )}
    </li>
  );
};

export default memoize(Todo);
