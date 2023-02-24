export class Card {
  //constructor for the "MenuItem" class
  constructor(item) {
    //data for the init card
    this.item = item;
    this._imageClass = this.item.imageClass;
    this._text = this.item.text;
    this._price = this.item.price;
    this._buttonText = this.item.buttonText;
  }

  //get template card from page
  _getTemplate() {
    const cardElement = document
      .querySelector('#card-template')
      .content.querySelector('.card')
      .cloneNode(true);
    return cardElement;
  }

  //upper first letter
  _toUpperCase(text) {
    return text.slice(0, 1).toUpperCase() + text.slice(1);
  }

  //generate menu
  generateCard() {
    //get template card
    this._element = this._getTemplate();
    this._imageElement = this._element.querySelector('.card__image');
    this._textElement = this._element.querySelector('.card__text');
    this._priceElement = this._element.querySelector('.card__price');
    this._buttonElement = this._element.querySelector('.button');
    //set variables card
    this._imageElement.classList.add(this._imageClass);
    this._textElement.textContent = this._text;
    this._priceElement.textContent = this._price;
    this._buttonElement.textContent = this._toUpperCase(this._buttonText);

    return this._element;
  }
}
