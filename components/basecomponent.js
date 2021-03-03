sealed;
export class philipsComponent extends HTMLElement {
  constructor() {
    super();
    this.props = {};
    this.state = {};
    this.root = this.attachShadow({ mode: "open" });
    // Check to see if observedAttributes are defined and has length
    if (
      this.constructor.observedAttributes &&
      this.constructor.observedAttributes.length
    ) {
      // Loop through the observed attributes
      this.constructor.observedAttributes.forEach((attribute) => {
        // Dynamically define the property getter/setter
        Object.defineProperty(this, attribute, {
          get() {
            return this.getAttribute(attribute);
          },
          set(attrValue) {
            if (attrValue) {
              this.setAttribute(attribute, attrValue);
            } else {
              this.removeAttribute(attribute);
            }
          },
        });
      });
    }
  }
  async BuildProps() {
    let keys = this.getAttributeNames();
    if (keys.length === 0) return;
    let props = {};
    for (const key of keys) {
      if (key.toLowerCase().startsWith("data-")) {
        let obj = JSON.parse(this.getAttribute(key) || "{}");
        props[key.replace("data-", "")] = obj;
      } else {
        props[key] = this.getAttribute(key);
      }
    }
    this.props = props;
    console.clear();
    console.log(this.props, "props");
    this.HandleRender();
  }

  HandleRender() {
    this.root.innerHTML = this.render();
  }
  Log(...args) {
    if (this.props.debug) console.log(...args);
  }
  async connectedCallback() {
    this.BuildProps();
  }
  attributeChangedCallback(name, oldValue, newValue) {
    this.BuildProps();
  }
  fireEvent(_event) {
    this.dispatchEvent(
      new CustomEvent(_event.type, {
        detail: _event.value,
        bubbles: true,
        composed: true,
      })
    );
  }
  getProps() {
    return JSON.stringify(this.props, null, 4);
  }
  getState() {
    return JSON.stringify(this.state, null, 4);
  }
}
export function complex(obj) {
  return JSON.stringify(obj);
}
function sealed(constructor) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}
export function Tag(name) {
  return (target) => {
    console.log("Tag", name);
    window.customElements.define(name, target);
  };
}
