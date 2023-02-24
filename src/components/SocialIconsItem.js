export class SocialIconsItem {
  //constructor for the "SocialIconsItem" class
  constructor(item) {
    //data for the init icon
    this.item = item;
    this._imageClass = this.item.imageClass;
    this._link = this.item.link;
  }

  //get template icon from page
  _getTemplate() {
    const iconElement = document
      .querySelector('#social-menu-item-template')
      .content.querySelector('.social-links-menu__item')
      .cloneNode(true);
    return iconElement;
  }

  //generate icon
  generateSocialIconsItem() {
    //get template icon
    this._element = this._getTemplate();
    this._linkElement = this._element.querySelector('.social-links-menu__button');
    //set variables icon
    this._linkElement.setAttribute('href', this._link);
    this._linkElement.classList.add(this._imageClass);

    return this._element;
  }
}
