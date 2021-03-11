const initState = {
  menuitems: ["home", "about", "contact"],
  mainDesc:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus pariatur tempore sint nobis dolorem optio adipisci voluptates perspiciatis cupiditate corporis.",
  images: [
    "https://th.bing.com/th/id/OIP.W6OUHhz7VwdAtJxpeUyUQQHaI-?w=156&h=189&c=7&o=5&dpr=1.5&pid=1.7",
    "data:image/jpeg;base64,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",
  ],
  SayApple: function (e) {
    const a = e.target;
    let href = a.src || a.getAttribute("src");
    alert(href);
  },
};

/* framework code */

const elem = (tag, props, ...children) => {
  console.log(typeof tag);
  if (typeof tag === "function") return tag(props, ...children);
  const element = document.createElement(tag);
  Object.entries(props || {}).forEach(([name, value]) => {
    if (name.startsWith("on") && name.toLowerCase() in window) {
      console.log(name, value, "event");
      element.addEventListener(name.toLowerCase().substr(2), value);
    } else element.setAttribute(name, value.toString());
  });

  children.forEach((child) => {
    appendChild(element, child);
  });

  return element;
};

const appendChild = (parent, child) => {
  if (Array.isArray(child))
    child.forEach((nestedChild) => appendChild(parent, nestedChild));
  else
    parent.appendChild(child.nodeType ? child : document.createTextNode(child));
};
const Children = (data, children) => {
  if (!children) return "";
  return children.map((child) => elem(child, data, children));
};

/* framework code ends */

const rootComponent = (data, children) => {
  return `<div id="wrapper">
    <h1>${data.title}</h1>
       ${Children(data, children)}        
    </div>`;
};

const Header = (data, children) => {
  console.log(data, children);
  return `<ul>
        ${data.menuitems.map((i) => `<li> ${i} </li>`)}
        <ul/>`;
};

const Body = (data, children) => {
  return `<p>
            ${data.mainDesc}
        <p/>`;
};

window.components = {};
window.components.SayApple = function (e) {
  const a = e.target;
  let href = a.src || a.getAttribute("src");
  alert(href);
};

const Gallery = (data, children) => {
  let { images } = data;
  return `<ul>
        ${images.map(
    (i) =>
      `<li>  <img onclick="components.SayApple(event)" src="${i}" alt="Apple" /> </li>`
  )}
        <ul/>
        `;
};

class MyComponent {
  constructor(props) {
    Object.entries(props || {}).forEach(([name, value]) => {
      this[name] = value;
    });
  }
  render() {
    return `One day match at ${this.place}`;
  }
}

let state = {
  title: "Main page",
  ...initState,
};

export const Boot = () => {
  document.querySelector("#root").innerHTML = elem(rootComponent, state, [
    Header,
    Body.bind(null, state, [Gallery]),
  ]);
};
