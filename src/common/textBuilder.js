//import { html } from "lit-html";
//const html = require('lit-html').html;

import $ from "jquery";
export const getName = (fname, mname, lname) => {
  let ret = $("<div></div").html(`${fname} ${mname} ${lname}`).html();
  return ret;
};
