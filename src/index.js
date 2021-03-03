import { log, getName, Boot, allAddresses, Hatchback } from "./common/";

log("Do Somrhing");

let item = 20;
log(item);

const str = `this is new item ${item}`;
log(str);

/*
let obj = {};

let nullcol = obj.Somrhing ?? 'do something null col'

log(nullcol)
*/

const reverseStr = (str) => str.split("").reverse().join("");

log(str.split("").reverse().join(""));
const arr = [1, 2, 3, 4];
arr.map((x) => {
  log(x);
});

/*
var num = 1_000_000_000 ;
log(num)
*/
log(getName("<b style='color:red'>darshan</b>", "narayan", "marathe"));

Boot();

log(typeof allAddresses);

log(new Hatchback().drive());
