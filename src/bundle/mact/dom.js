import synteticEvents from './synteticEvents';
import { isSVG, createFragmentFrom } from './utils';
/**
 * The tag name and create an html together with the attributes
 *
 * @param  {String} tagName name as string, e.g. 'div', 'span', 'svg'
 * @param  {Object} attrs html attributes e.g. data-, width, src
 * @param  {Array} children html nodes from inside de elements
 * @return {HTMLElement|SVGElement} html node with attrs
 */

function createElements(tagName, attrs, children) {
  const element = isSVG(tagName) ? document.createElementNS('http://www.w3.org/2000/svg', tagName) : document.createElement(tagName); // one or multiple will be evaluated to append as string or HTMLElement

  const fragment = createFragmentFrom(children);
  element.appendChild(fragment);
  Object.keys(attrs || {}).forEach(prop => {
    if (prop === 'style') {
      // e.g. origin: <element style={{ prop: value }} />
      Object.assign(element.style, attrs[prop]);
    } else if (prop === 'ref' && typeof attrs.ref === 'function') {
      attrs.ref(element, attrs);
    } else if (prop === 'className') {
      element.setAttribute('class', attrs[prop]);
    } else if (prop === 'htmlFor') {
      element.setAttribute('for', attrs[prop]);
    } else if (prop === 'xlinkHref') {
      element.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', attrs[prop]);
    } else if (prop === 'dangerouslySetInnerHTML') {
      // eslint-disable-next-line no-underscore-dangle
      element.innerHTML = attrs[prop].__html;
    } else if (synteticEvents.includes(prop)) {
      const event = prop.replace(/^on/, '').toLowerCase();
      element.addEventListener(event, attrs[prop]);
    } else {
      // any other prop will be set as attribute
      element.setAttribute(prop, attrs[prop]);
    }
  });
  return element;
}
/**
 * The JSXTag will be unwrapped returning the html
 *
 * @param  {Function} JSXTag name as string, e.g. 'div', 'span', 'svg'
 * @param  {Object} elementProps custom jsx attributes e.g. fn, strings
 * @param  {Array} children html nodes from inside de elements
 *
 * @return {Function} returns de 'dom' (fn) executed, leaving the HTMLElement
 *
 * JSXTag:  function Comp(props) {
 *   return dom("span", null, props.num);
 * }
 */


function composeToFunction(JSXTag, elementProps, children) {
  const props = Object.assign({}, JSXTag.defaultProps || {}, elementProps, {
    children
  });
  const bridge = JSXTag.prototype.render ? new JSXTag(props).render : JSXTag;
  const result = bridge(props);

  switch (result) {
    case 'FRAGMENT':
      return createFragmentFrom(children);
    // Portals are useful to render modals
    // allow render on a different element than the parent of the chain
    // and leave a comment instead

    case 'PORTAL':
      bridge.target.appendChild(createFragmentFrom(children));
      return document.createComment('Portal Used');

    default:
      return result;
  }
}

function dom(element, attrs, ...children) {
  // Custom Components will be functions
  if (typeof element === 'function') {
    // e.g. const CustomTag = ({ w }) => <span width={w} />
    // will be used
    // e.g. <CustomTag w={1} />
    // becomes: CustomTag({ w: 1})
    return composeToFunction(element, attrs, children);
  } // regular html components will be strings to create the elements
  // this is handled by the babel plugins


  if (typeof element === 'string') {
    return createElements(element, attrs, children);
  }

  return console.error(`jsx-render does not handle ${typeof tag}`);
}

export default dom;
export const Fragment = () => 'FRAGMENT';
export const portalCreator = node => {
  function Portal() {
    return 'PORTAL';
  }

  Portal.target = document.body;

  if (node && node.nodeType === Node.ELEMENT_NODE) {
    Portal.target = node;
  }

  return Portal;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC9tYWN0L2RvbS5qcyJdLCJuYW1lcyI6WyJzeW50ZXRpY0V2ZW50cyIsImlzU1ZHIiwiY3JlYXRlRnJhZ21lbnRGcm9tIiwiY3JlYXRlRWxlbWVudHMiLCJ0YWdOYW1lIiwiYXR0cnMiLCJjaGlsZHJlbiIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnROUyIsImNyZWF0ZUVsZW1lbnQiLCJmcmFnbWVudCIsImFwcGVuZENoaWxkIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJwcm9wIiwiYXNzaWduIiwic3R5bGUiLCJyZWYiLCJzZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGVOUyIsImlubmVySFRNTCIsIl9faHRtbCIsImluY2x1ZGVzIiwiZXZlbnQiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcG9zZVRvRnVuY3Rpb24iLCJKU1hUYWciLCJlbGVtZW50UHJvcHMiLCJwcm9wcyIsImRlZmF1bHRQcm9wcyIsImJyaWRnZSIsInByb3RvdHlwZSIsInJlbmRlciIsInJlc3VsdCIsInRhcmdldCIsImNyZWF0ZUNvbW1lbnQiLCJkb20iLCJjb25zb2xlIiwiZXJyb3IiLCJ0YWciLCJGcmFnbWVudCIsInBvcnRhbENyZWF0b3IiLCJub2RlIiwiUG9ydGFsIiwiYm9keSIsIm5vZGVUeXBlIiwiTm9kZSIsIkVMRU1FTlRfTk9ERSJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsY0FBUCxNQUEyQixrQkFBM0I7QUFDQSxTQUFTQyxLQUFULEVBQWdCQyxrQkFBaEIsUUFBMEMsU0FBMUM7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNDLGNBQVQsQ0FBd0JDLE9BQXhCLEVBQWlDQyxLQUFqQyxFQUF3Q0MsUUFBeEMsRUFBa0Q7QUFDaEQsUUFBTUMsT0FBTyxHQUFHTixLQUFLLENBQUNHLE9BQUQsQ0FBTCxHQUNaSSxRQUFRLENBQUNDLGVBQVQs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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3ludGV0aWNFdmVudHMgZnJvbSAnLi9zeW50ZXRpY0V2ZW50cydcclxuaW1wb3J0IHsgaXNTVkcsIGNyZWF0ZUZyYWdtZW50RnJvbSB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG4vKipcclxuICogVGhlIHRhZyBuYW1lIGFuZCBjcmVhdGUgYW4gaHRtbCB0b2dldGhlciB3aXRoIHRoZSBhdHRyaWJ1dGVzXHJcbiAqXHJcbiAqIEBwYXJhbSAge1N0cmluZ30gdGFnTmFtZSBuYW1lIGFzIHN0cmluZywgZS5nLiAnZGl2JywgJ3NwYW4nLCAnc3ZnJ1xyXG4gKiBAcGFyYW0gIHtPYmplY3R9IGF0dHJzIGh0bWwgYXR0cmlidXRlcyBlLmcuIGRhdGEtLCB3aWR0aCwgc3JjXHJcbiAqIEBwYXJhbSAge0FycmF5fSBjaGlsZHJlbiBodG1sIG5vZGVzIGZyb20gaW5zaWRlIGRlIGVsZW1lbnRzXHJcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fFNWR0VsZW1lbnR9IGh0bWwgbm9kZSB3aXRoIGF0dHJzXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50cyh0YWdOYW1lLCBhdHRycywgY2hpbGRyZW4pIHtcclxuICBjb25zdCBlbGVtZW50ID0gaXNTVkcodGFnTmFtZSlcclxuICAgID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIHRhZ05hbWUpXHJcbiAgICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSlcclxuXHJcbiAgLy8gb25lIG9yIG11bHRpcGxlIHdpbGwgYmUgZXZhbHVhdGVkIHRvIGFwcGVuZCBhcyBzdHJpbmcgb3IgSFRNTEVsZW1lbnRcclxuICBjb25zdCBmcmFnbWVudCA9IGNyZWF0ZUZyYWdtZW50RnJvbShjaGlsZHJlbilcclxuICBlbGVtZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KVxyXG5cclxuICBPYmplY3Qua2V5cyhhdHRycyB8fCB7fSkuZm9yRWFjaChwcm9wID0+IHtcclxuICAgIGlmIChwcm9wID09PSAnc3R5bGUnKSB7XHJcbiAgICAgIC8vIGUuZy4gb3JpZ2luOiA8ZWxlbWVudCBzdHlsZT17eyBwcm9wOiB2YWx1ZSB9fSAvPlxyXG4gICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIGF0dHJzW3Byb3BdKVxyXG4gICAgfSBlbHNlIGlmIChwcm9wID09PSAncmVmJyAmJiB0eXBlb2YgYXR0cnMucmVmID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGF0dHJzLnJlZihlbGVtZW50LCBhdHRycylcclxuICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gJ2NsYXNzTmFtZScpIHtcclxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYXR0cnNbcHJvcF0pXHJcbiAgICB9IGVsc2UgaWYgKHByb3AgPT09ICdodG1sRm9yJykge1xyXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9yJywgYXR0cnNbcHJvcF0pXHJcbiAgICB9IGVsc2UgaWYgKHByb3AgPT09ICd4bGlua0hyZWYnKSB7XHJcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCAneGxpbms6aHJlZicsIGF0dHJzW3Byb3BdKVxyXG4gICAgfSBlbHNlIGlmIChwcm9wID09PSAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnKSB7XHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxyXG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IGF0dHJzW3Byb3BdLl9faHRtbFxyXG4gICAgfSBlbHNlIGlmIChzeW50ZXRpY0V2ZW50cy5pbmNsdWRlcyhwcm9wKSkge1xyXG4gICAgICBjb25zdCBldmVudCA9IHByb3AucmVwbGFjZSgvXm9uLywgJycpLnRvTG93ZXJDYXNlKClcclxuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBhdHRyc1twcm9wXSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGFueSBvdGhlciBwcm9wIHdpbGwgYmUgc2V0IGFzIGF0dHJpYnV0ZVxyXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShwcm9wLCBhdHRyc1twcm9wXSlcclxuICAgIH1cclxuICB9KVxyXG5cclxuICByZXR1cm4gZWxlbWVudFxyXG59XHJcblxyXG4vKipcclxuICogVGhlIEpTWFRhZyB3aWxsIGJlIHVud3JhcHBlZCByZXR1cm5pbmcgdGhlIGh0bWxcclxuICpcclxuICogQHBhcmFtICB7RnVuY3Rpb259IEpTWFRhZyBuYW1lIGFzIHN0cmluZywgZS5nLiAnZGl2JywgJ3NwYW4nLCAnc3ZnJ1xyXG4gKiBAcGFyYW0gIHtPYmplY3R9IGVsZW1lbnRQcm9wcyBjdXN0b20ganN4IGF0dHJpYnV0ZXMgZS5nLiBmbiwgc3RyaW5nc1xyXG4gKiBAcGFyYW0gIHtBcnJheX0gY2hpbGRyZW4gaHRtbCBub2RlcyBmcm9tIGluc2lkZSBkZSBlbGVtZW50c1xyXG4gKlxyXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gcmV0dXJucyBkZSAnZG9tJyAoZm4pIGV4ZWN1dGVkLCBsZWF2aW5nIHRoZSBIVE1MRWxlbWVudFxyXG4gKlxyXG4gKiBKU1hUYWc6ICBmdW5jdGlvbiBDb21wKHByb3BzKSB7XHJcbiAqICAgcmV0dXJuIGRvbShcInNwYW5cIiwgbnVsbCwgcHJvcHMubnVtKTtcclxuICogfVxyXG4gKi9cclxuZnVuY3Rpb24gY29tcG9zZVRvRnVuY3Rpb24oSlNYVGFnLCBlbGVtZW50UHJvcHMsIGNoaWxkcmVuKSB7XHJcbiAgY29uc3QgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBKU1hUYWcuZGVmYXVsdFByb3BzIHx8IHt9LCBlbGVtZW50UHJvcHMsIHsgY2hpbGRyZW4gfSlcclxuICBjb25zdCBicmlkZ2UgPSBKU1hUYWcucHJvdG90eXBlLnJlbmRlciA/IG5ldyBKU1hUYWcocHJvcHMpLnJlbmRlciA6IEpTWFRhZ1xyXG4gIGNvbnN0IHJlc3VsdCA9IGJyaWRnZShwcm9wcylcclxuXHJcbiAgc3dpdGNoIChyZXN1bHQpIHtcclxuICAgIGNhc2UgJ0ZSQUdNRU5UJzpcclxuICAgICAgcmV0dXJuIGNyZWF0ZUZyYWdtZW50RnJvbShjaGlsZHJlbilcclxuXHJcbiAgICAvLyBQb3J0YWxzIGFyZSB1c2VmdWwgdG8gcmVuZGVyIG1vZGFsc1xyXG4gICAgLy8gYWxsb3cgcmVuZGVyIG9uIGEgZGlmZmVyZW50IGVsZW1lbnQgdGhhbiB0aGUgcGFyZW50IG9mIHRoZSBjaGFpblxyXG4gICAgLy8gYW5kIGxlYXZlIGEgY29tbWVudCBpbnN0ZWFkXHJcbiAgICBjYXNlICdQT1JUQUwnOlxyXG4gICAgICBicmlkZ2UudGFyZ2V0LmFwcGVuZENoaWxkKGNyZWF0ZUZyYWdtZW50RnJvbShjaGlsZHJlbikpXHJcbiAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdQb3J0YWwgVXNlZCcpXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gcmVzdWx0XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkb20oZWxlbWVudCwgYXR0cnMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgLy8gQ3VzdG9tIENvbXBvbmVudHMgd2lsbCBiZSBmdW5jdGlvbnNcclxuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIC8vIGUuZy4gY29uc3QgQ3VzdG9tVGFnID0gKHsgdyB9KSA9PiA8c3BhbiB3aWR0aD17d30gLz5cclxuICAgIC8vIHdpbGwgYmUgdXNlZFxyXG4gICAgLy8gZS5nLiA8Q3VzdG9tVGFnIHc9ezF9IC8+XHJcbiAgICAvLyBiZWNvbWVzOiBDdXN0b21UYWcoeyB3OiAxfSlcclxuICAgIHJldHVybiBjb21wb3NlVG9GdW5jdGlvbihlbGVtZW50LCBhdHRycywgY2hpbGRyZW4pXHJcbiAgfVxyXG5cclxuICAvLyByZWd1bGFyIGh0bWwgY29tcG9uZW50cyB3aWxsIGJlIHN0cmluZ3MgdG8gY3JlYXRlIHRoZSBlbGVtZW50c1xyXG4gIC8vIHRoaXMgaXMgaGFuZGxlZCBieSB0aGUgYmFiZWwgcGx1Z2luc1xyXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50cyhlbGVtZW50LCBhdHRycywgY2hpbGRyZW4pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29uc29sZS5lcnJvcihganN4LXJlbmRlciBkb2VzIG5vdCBoYW5kbGUgJHt0eXBlb2YgdGFnfWApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvbVxyXG5leHBvcnQgY29uc3QgRnJhZ21lbnQgPSAoKSA9PiAnRlJBR01FTlQnXHJcbmV4cG9ydCBjb25zdCBwb3J0YWxDcmVhdG9yID0gbm9kZSA9PiB7XHJcbiAgZnVuY3Rpb24gUG9ydGFsKCkge1xyXG4gICAgcmV0dXJuICdQT1JUQUwnXHJcbiAgfVxyXG5cclxuICBQb3J0YWwudGFyZ2V0ID0gZG9jdW1lbnQuYm9keVxyXG5cclxuICBpZiAobm9kZSAmJiBub2RlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xyXG4gICAgUG9ydGFsLnRhcmdldCA9IG5vZGVcclxuICB9XHJcblxyXG4gIHJldHVybiBQb3J0YWxcclxufVxyXG4iXX0=
//# sourceMappingURL=dom.js.map
