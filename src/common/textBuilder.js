//import {html } from 'lit-html'
const html = require('lit-html').html;

export const getName = (fname, mname , lnane) => {
  return html`${fname} ${mname} ${lname}`
}
