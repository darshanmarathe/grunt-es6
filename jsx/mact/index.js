import dom, { Fragment } from "./dom.js";
import JSXComponent from "./JSXComponent.js";
const constructPropertyFromArgs = function (fnToMemoize, args) {
    let propToCheck = [];
    if(typeof args === 'object') args = JSON.stringify(args)
    propToCheck = propToCheck.concat(fnToMemoize.name, args);
    return propToCheck.join('|'); // A delimiter to join args
  }
  
  //  `memoize` function  decides if it has to return cached value or call the summation function
  const memoize = function (fnToMemoize) {
    const memoizedCache = {}                // A closeure Object
    return function(...args) {
      const propToCheck = constructPropertyFromArgs(fnToMemoize, args);
      if (!memoizedCache[propToCheck]) {
        memoizedCache[propToCheck] = fnToMemoize(...args);
      } else  {
        console.log('From Cache ');
      }
      return memoizedCache[propToCheck];
    }
  }
  

export { dom, Fragment, JSXComponent , memoize };


