export class IconsMenuItem {
  //constructor for the "IconsMenuItem" class
  constructor(item) {
    //data for the init icon
    this.item = item;
    this._imageClass = this.item.imageClass;
    this._link = this.item.link;
    this._countClass = this.item?.countClass;
    this._count = this.item?.number;
  }

  //get template icon from page
  _getTemplate() {
    const iconElement = document
      .querySelector('#menu-icons-item-template')
      .content.querySelector('.menu-icons__item')
      .cloneNode(true);
    return iconElement;
  }

  //generate icon
  generateIconsMenuItem() {
    //get template icon
    this._element = this._getTemplate();
    this._linkElement = this._element.querySelector('.menu-icons__button');
    //set variables icon
    this._linkElement.setAttribute('href', this._link);
    this._linkElement.classList.add(this._imageClass);
    if (this._count) this._linkElement.classList.add(this._countClass);

    return this._element;
  }
}
