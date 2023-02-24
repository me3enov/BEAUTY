export class InfoBlockItem {
  //constructor for the "InfoBlockItem" class
  constructor(item) {
    //data for the init info block item
    this.item = item;
    this._title = this.item.title;
    this._text = this.item.text;
    this._input = this.item?.input;
    if (this._input) {
      this._inputId = this._input.id;
      this._inputType = this._input.type;
      this._inputName = this._input.name;
      this._inputValue = this._input.value;
    } else this._buttonText = this.item.buttonText;
    this._imageClass = this.item.imageClass;
  }

  //get template info block item from page
  _getTemplate() {
    const itemElement = document
      .querySelector('#info-block-item')
      .content.querySelector('.info-block__item')
      .cloneNode(true);
    return itemElement;
  }

  //generate info block item
  generateInfoBlockItem() {
    //get template info block item
    this._element = this._getTemplate();
    this._titleElement = this._element.querySelector('.info-block__title');
    this._textElement = this._element.querySelector('.info-block__text');
    this._inputElement = this._element.querySelector('.input');
    this._buttonElement = this._element.querySelector('.button');
    //set variables info block item
    this._element.classList.add(this._imageClass);
    this._titleElement.textContent = this._title;
    this._textElement.textContent = this._text;
    if (this._input) {
      this._inputElement.setAttribute('id', this._inputId);
      this._inputElement.setAttribute('type', this._inputType);
      this._inputElement.setAttribute('name', this._inputName);
      this._inputElement.setAttribute('value', this._inputValue);
      this._buttonElement.remove();
    } else {
      this._buttonElement.textContent = this._buttonText;
      this._inputElement.remove();
    }

    return this._element;
  }
}
