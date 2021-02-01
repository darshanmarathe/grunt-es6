const logDiv = document.querySelector('#log');
export const log = msg => {
  if (logDiv) logDiv.innerHTML += msg + '<br>';
  console.log(msg);
};
//# sourceMappingURL=log.js.map
