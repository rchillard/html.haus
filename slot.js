customElements.define(
  "my-slot-example",
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById("slot-example");
      let templateContent = template.content;
      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }
);
