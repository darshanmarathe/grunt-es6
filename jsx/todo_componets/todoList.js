import { dom, Fragment } from "../mact/index.js";

import { rc, mh } from "./rc.js"
import { Todo, Loading } from "./index.js";
import initState from "./initialstate.js";
const i18n = initState.translations();
// TodoList Component
const TodoList = (props) => {
  let { ReachedMax, page, pageSize, loading } = initState.state;
  return (
    <>
      <div class="parent">

        {
          initState.statuses.map((x) => {
            return <div style={{ width: '100%' }}>
              <h4>{x}</h4>
              {props.todos.filter((t) => t.status === x).map((ft) => {
                return rc(ft, true) ? <Todo {...ft} {...props} /> : null
              })}

            </div>

          })
        }


      </div>
      <div>
        <br />
        <p>Done : {ReachedMax.toString()} PageNo : {page} , PageSize: {pageSize} Records: {props.todos.length}</p>

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
      </div>
    </>
  );
};

export default TodoList;
