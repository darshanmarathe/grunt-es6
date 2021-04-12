import { dom, Fragment } from "../mact/index.js";

import { Todo , Loading } from "./index";
import initState from "./initialstate.js";
const i18n  = initState.translations();
// TodoList Component
const TodoList = (props) => {
  let {ReachedMax , page , pageSize , loading} = initState.state;
  return (
    <>
      <ul>
        {props.todos.map((x) => {
          return <Todo {...x} {...props} />;
        })}
     <li>Done : {ReachedMax.toString()} PageNo : {page} , PageSize: {pageSize} Records: {props.todos.length}</li>
      </ul>
     {loading && <div>Loading..... <Loading /> </div>}
     <br />
      {
        initState.state.ReachedMax ? 
        <button 
        disabled={initState.ReachedMax}
       onClick={initState.actions.More}>{i18n("moreBtn")}</button>
        :
        <button 
        onClick={initState.actions.More}>{i18n("moreBtn")}</button>

      }
    </>
  );
};

export default TodoList;
