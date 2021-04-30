import { dom } from "../mact/index.js";
import { initState } from "./index.js";

const PeopleLookUp = (props) => {

  $.ajax({
    url: 'http://localhost:3000/users/',
    dataType: 'json',
    success: function (data) {
      initState.setState({ users: data });
      console.log(initState.state.users)
    }
  });



  return <div>
    {!initState.state.users && "Loading....."}
    {initState.state.users.map(element => {

    })}
  </div >
}

export default PeopleLookUp;