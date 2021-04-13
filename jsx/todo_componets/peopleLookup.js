import { dom } from "../mact/index.js";
import { initState } from "./index";

const PeopleLookUp = (props) => {
  console.log("People Lookups")
  return <div>
    <h1>{props.title}</h1>
    <hr />
    <p>{props.desc}</p>
    <button class="btn" onClick={(e) => {
      props.done = true;
      props.status = "Done"
      initState.actions.HandleStatus(props);
      setTimeout(function () {
        $.colorbox.close()
      }, 200);
    }} >Mark Done</button>
    <button class="btn btn-success" onClick={(e) => {
      initState.actions.HandleDelete(props.id);
      setTimeout(function () {
        $.colorbox.close()
      }, 200);
    }} >Delete</button>
  </div>
}

export default PeopleLookUp;