import { dom, Fragment, memoize } from "../mact/index.js";
import moment from "moment";
import { initState, TaskFlyOut } from "./index";
import { HOC, UserComponent } from "./Hoc.js";

// Todo Component
const Todo = (props) => {
  function renderTodo() {
    let todo = props.title == null ? "Junk data" : props.title;
    const decoration = props.done ? "line-through" : "none";
    return (
      <>
        <div
          class="titleDiv"
          style={{ "text-decoration": decoration }}
          onBlur={(e) => {
            const todo = {
              id: props.id,
              title: e.target.innerHTML,
            };
            initState.actions.HandleChange(todo);
          }}
          contentEditable="true"
          id={props.id + "_title"}
        >
          {todo}
        </div>

        <div class="controlsContainer">

          <HOC id={props.id} component={UserComponent}>
            <button style={{ float: 'left' }} class="btn">+</button>
          </HOC>
          <select
            value={props.status}
            style={{ marginTop: "5px" }}
            onChange={(e) => {
              const todo = {
                id: props.id,
                status: e.target.value,
                done: e.target.value === "Done",
              };
              Done_Click(todo);
            }}
          >
            <option value={props.status}>{props.status}</option>
            {initState.statuses
              .filter((x) => x != props.status)
              .map((x) => (
                <option value={x}>{x}</option>
              ))}
          </select>

          <button
            onClick={(e) => {
              Delete_Click(props);
            }}
          >
            X
          </button>
          <button
            style={{ float: 'left' }}
            onClick={(e) => {
              // $("#" + props.id + "div").slideToggle();
              // initState.actions.HandleOpenClose(props);
              Handle_Popup("todoItem" + props.id);
            }}
          >
            ...
          </button>
          <button
            dangerouslySetInnerHTML={{
              __html: `${props.isOpen ? "&#8593;" : "&#8595;"}`,
            }}
            style={{ float: "left", fontWeight: "bold" }}
            onClick={(e) => {
              $("#" + "todo_" + props.id).toggle();
              initState.actions.HandleOpenClose(props);
            }}
          ></button>
          <span class="dateContainer">
            {moment(props.date).format("Do MMM YYYY")}
          </span>

          <input
            type="color"
            value={props.color}
            onChange={(e) => {
              const todo = {
                id: props.id,
                color: e.target.value,
              };
              initState.actions.HandleChange(todo);
            }}
          />

          <span class="datepicker-toggle">
            <span class="datepicker-toggle-button"></span>
            <input
              type="date"
              class="datepicker-input"
              value={new Date(props.date)}
              onChange={(e) => {
                const todo = {
                  id: props.id,
                  date: e.target.value,
                };
                initState.actions.HandleChange(todo);
              }}
            />
          </span>


        </div>
      </>
    );
  }

  function Delete_Click(e) {
    if (confirm("Do you want to delete this record ?")) {
      initState.actions.HandleDelete(e.id);
    }
  }

  function Handle_Popup(id) {
    const _id = `#${id}`;
    console.log(_id);
    $(_id).colorbox({
      width: "600px",
      inline: false,
      html: <TaskFlyOut {...props} />,
      onClosed: function () {
        $.colorbox.remove();
        $(_id).css("width", "");
      },
    });
  }

  function Done_Click(todo) {
    initState.actions.HandleStatus(todo);
  }

  let shadow = "5px 1px " + (props.color || "black");
  //style={{ 'box-shadow': shadow }}
  return (
    <div
      class="todoItem"
      style={{ boxShadow: shadow }}
      id={"todoItem" + props.id}
      onMouseOver={(e) => {
        //e.target.style.boxShadow = shadow
      }}
      onMouseOut={(e) => {
        //e.target.style.boxShadow = '';
      }}
    >
      {props.done === true ? <del> {renderTodo()} </del> : renderTodo()}

      <div
        id={"todo_" + props.id}
        style={{ display: props.isOpen ? "block" : "none" }}
      >
        <br />
        <br />

        <div
          class="desc"
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
        >
          {props.desc}
        </div>
      </div>
    </div>
  );
};

export default memoize(Todo);
