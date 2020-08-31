import "./select.scss";

const getTemplate = (data = [], placeholder, selectedId) => {
  let text = "initial placeholder";
  const items = data.map((item) => {
    let cls = "";
    if (selectedId === item.id) {
      text = item.value;
      cls = "selected";
    }
    return `<li data-type="item"  data-id="${item.id}" class="select__item ${cls}">${item.value}</li>`;
  });
  return ` <div class="select__input" data-type="input">
  <span data-type="value">${text}</span>
[>]
  </div>
  <div class="select__dropdown">
  <ul class="select__list">
   ${items.join("")}
  </ul>
  </div>`;
};

export class Select {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.options = options;
    this.selectedId = options.selectedId;
    this.render();
    this.setup();
  }

  get isOpen() {
    return this.$el.classList.contains("open");
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  render() {
    const { data, placeholder } = this.options;
    this.$el.classList.add("select");
    this.$el.innerHTML = getTemplate(data, placeholder, this.selectedId);
  }
  setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.$el.addEventListener("click", this.clickHandler);
    this.$arrow = this.$el.querySelector(`[data-type="arrow"]`);
    this.$value = this.$el.querySelector(`[data-type="value"]`);
  }

  clickHandler(e) {
    const { type } = e.target.dataset;
    if (type === "input") {
      this.toggle();
    } else if (type === "item") {
      const id = e.target.dataset.id;
      this.select(id);
    }
  }
  get current() {
    return this.options.data.find((item) => item.id === this.selectedId);
  }

  select(id) {
    this.selectedId = +id;
    this.$value.textContent = this.current.value;
    this.$el.querySelectorAll(`[data-type="item"]`).forEach((element) => {
      element.classList.remove("selected");
    });
    this.$el
      .querySelector(`[data-id="${this.current.id}"]`)
      .classList.add("selected");

    this.options.onSelect ? this.options.onSelect(this.current) : null;
    this.close();
  }

  open() {
    this.$el.classList.add("open");
    this.$arrow.classList.remove("fa-caret-down");
    this.$arrow.classList.add("fa-caret-up");
  }
  close() {
    this.$el.classList.remove("open");
    this.$arrow.classList.remove("fa-caret-up");
    this.$arrow.classList.add("fa-caret-down");
  }
  destroy() {
    this.$el.removeEventListener("click", this.clickHandler);
    this.$el.innerHTML = "";
  }
}
