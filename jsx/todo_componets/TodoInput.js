import { dom, Fragment } from "../mact/index.js";

import moment from "moment";
import { initState } from "./index.js";
// TodoInput Component

function parsestring(str) {
    var date = new Date();
    if (str.toLowerCase().indexOf("tomorrow") > -1) {
        date = moment().add(1, "days").toDate();
    }
    if (str.toLowerCase().indexOf("next week") > -1) {
        date = moment().add(1, "week").toDate();
    }
    if (str.toLowerCase().indexOf("next month") > -1) {
        date = moment().add(1, "month").toDate();
    }
    if (str.toLowerCase().indexOf("next year") > -1) {
        date = moment().add(1, "year").toDate();
    }
    {
        var dueDate = str.match(/\b(?:(?:Mon)|(?:Tues?)|(?:Wed(?:nes)?)|(?:Thur?s?)|(?:Fri)|(?:Sat(?:ur)?)|(?:Sun))(?:day)?\b[:\-,]?\s*(?:(?:jan|feb)?r?(?:uary)?|mar(?:ch)?|apr(?:il)?|may|june?|july?|aug(?:ust)?|oct(?:ober)?|(?:sept?|nov|dec)(?:ember)?)\s+\d{1,2}\s*,?\s*\d{4}/i);
        if (dueDate != null) {
            date = new Date(dueDate.toString());
        }
    }
    {
        var dueDate = str.match(/\w+(?=\s+days)/);
        if (dueDate != null && !isNaN(dueDate.toString())) {
            date = moment().add(parseInt(dueDate.toString()), "day").toDate();
        }
    }
    {
        var dueDate = str.match(/\w+(?=\s+weeks)/);
        if (dueDate != null && !isNaN(dueDate.toString())) {
            date = moment().add(parseInt(dueDate.toString()), "week").toDate();
        }
    }
    {
        var dueDate = str.match(/\w+(?=\s+months)/);
        if (dueDate != null && !isNaN(parseInt(dueDate.toString()))) {
            date = moment().add(parseInt(dueDate.toString()), "month").toDate();
        }
    }
  return {
    str,
    date
    }
}
const TodoInput = (props) => {
  return (
    <input
      type="text"
      style={{ width: "100%" }}
      onChange={(e) => {
        let { value } = e.target;

        initState.actions.HandleAdd(parsestring(value))
      }}
      placeholder={props.placeholder}
    />
  );
};

export default TodoInput;
 