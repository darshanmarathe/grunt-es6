import { philipsComponent, Tag, complex } from "./basecomponent.js";

Tag("ph-card");
export class Card extends philipsComponent {
  static get observedAttributes() {
    return ["name"];
  }

  render() {
    console.log("Card render called..");
    return `hello this is fancy card with name ${this.props.name}
    and i live at <br> <u> ${this.props.address} </u>`;
  }
}

export class Accordion extends philipsComponent {
  static get observedAttributes() {
    return ["data"];
  }
  render() {}
}
