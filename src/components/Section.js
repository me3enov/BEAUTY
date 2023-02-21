/* eslint-disable no-unused-expressions */
export default class Section {
  // constructor for the "Section" class
  constructor({ renderer }, containerSelector) {
    this.renderer = renderer;
    this.container = document.querySelector(containerSelector);
  }

  // render all items
  renderItems(data) {
    const items = Object.values(data);
    items.forEach((item) => {
      this.renderer(item);
    });
  }

  // add item to DOM
  addItem(element, place = 'prepend') {
    place === 'append' ? this.container.append(element) : this.container.prepend(element);
  }
}
