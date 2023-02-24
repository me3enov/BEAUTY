export class MenuItem {
  //constructor for the "MenuItem" class
  constructor(item, selectors) {
    //data for the init menu item
    this.item = item;
    this._linkText = this.item.linkText;
    this._link = this.item.link;
    //selectors for the init menu item
    this._templateSelector = selectors.templateSelector;
    this._itemSelector = selectors.itemSelector;
    this._linkSelector = selectors.linkSelector;
  }

  //get template menu item from page
  _getTemplate() {
    const menuElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(this._itemSelector)
      .cloneNode(true);
    return menuElement;
  }

  //upper first letter
  _toUpperCase(text) {
    return text.slice(0, 1).toUpperCase() + text.slice(1);
  }

  //generate menu item
  generateMenuItem() {
    //get template menu item
    this._element = this._getTemplate();
    this._linkElement = this._element.querySelector(this._linkSelector);
    //set variables menu item
    this._linkElement.textContent = this._toUpperCase(this._linkText);
    this._linkElement.setAttribute('href', this._link);

    return this._element;
  }
}
