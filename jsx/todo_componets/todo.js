import { dom, Fragment, memoize } from "../mact/index.js";
import moment from 'moment'
import { initState, PeopleLookUp } from "./index";

// Todo Component
const Todo = (props) => {
  function renderTodo() {
    let todo = props.title == null ? "Junk data" : props.title;
    const decoration = props.done ? 'line-through' : 'none'
    return <b> <em>

      <div class="titleDiv"
        style={{ 'text-decoration': decoration }} onBlur={(e) => {
          const todo = {
            id: props.id,
            title: e.target.innerHTML
          };
          initState.actions.HandleChange(todo);
        }}
        contentEditable="true"
        id={props.id + "_title"}>
        {todo}

      </div>
    </em>
    </b>
  }

  function Delete_Click(e) {
    if (confirm("Do you want to delete this record ?")) {
      initState.actions.HandleDelete(e.id);
    }
  }

  function Handle_Popup(id) {
    const _id = `#${id}`;
    console.log(_id);
    $(_id).css('width', '100%');
    // $(_id).colorbox({
    //   width: "600px", inline: true, href: function () {
    //     return _id;
    //   }, onClosed: function () {
    //     $.colorbox.remove();
    //     $(_id).css('width', '');
    //   }
    // });
    //PeopleLookUp({ name: "Darshan" })
    debugger;
    $(_id).colorbox({
      width: "600px", inline: false, html: <PeopleLookUp {...props} />, onClosed: function () {
        $.colorbox.remove();
        $(_id).css('width', '');
      }
    });


  }

  function Done_Click(todo) {
    console.log(todo, "todo");
    initState.actions.HandleStatus(todo);
  }

  let shadow = '2px 5px ' + (props.color || 'black');

  return (
    <div class="todoItem" id={"todoItem" + props.id} style={{ 'box-shadow': shadow }}>
      {props.done === true ? <del> {renderTodo()} </del> : renderTodo()}
      <br />
      <span class="dateContainer">
        {moment(props.date).format("Do MMM YYYY")}
      </span>
      <span class="datepicker-toggle">
        <span class="datepicker-toggle-button"></span>
        <input type="date" class="datepicker-input" value={new Date(props.date)} onChange={(e) => {
          const todo = {
            id: props.id,
            date: e.target.value
          };
          initState.actions.HandleChange(todo);
        }} />
      </span>

      <select value={props.status} onChange={(e) => {
        const todo = {
          id: props.id,
          status: e.target.value,
          done: (e.target.value === "Done")
        };
        Done_Click(todo);
      }}>
        <option value={props.status}>{props.status}</option>
        {["Not Started", "Work in Progress", "Stuck", "Done"]
          .filter(x => x != props.status)
          .map((x) => <option value={x}>{x}</option>)}
      </select>
      <button
        onClick={(e) => {
          Delete_Click(props);
        }}
      >
        X
        </button>
      {props.desc != null && (
        <button
          onClick={(e) => {
            // $("#" + props.id + "div").slideToggle();
            // initState.actions.HandleOpenClose(props);
            Handle_Popup("todoItem" + props.id)
          }}
        >
          ...
        </button>
      )}



      <input type="color" value={props.color} onChange={(e) => {
        const todo = {
          id: props.id,
          color: e.target.value
        };
        initState.actions.HandleChange(todo);
      }} />
      <br />
      {props.desc != null && (
        <div class="desc"
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
        // style={{ display: props.isOpen ? "block" : "none" }}
        >
          {props.desc}
        </div>
      )}
    </div>
  );
};

export default memoize(Todo);
