/* eslint-disable no-unused-expressions */
export default class Card {
  // constructor for the "Card" class
  constructor(item, config) {
    // data to init a card
    this.item = item;
    this.disabled = item.disabled;
    this.subtitle = item.subtitle;
    this.promoItems = item.promoItems;
    this.subtextSelected = item.subtextSelected;
    this.labelNumber = item.labelNumber;
    this.imageClass = item.imageClass;

    // text to a card
    this.texts = config.TEXTS;
    this.text = config.TEXTS.text;
    this.textAfter = config.TEXTS.textAfter;
    this.title = config.TEXTS.title;
    this.labelText = config.TEXTS.labelText;
    this.subtext = config.TEXTS.subtext;
    this.subtextBuy = config.TEXTS.subtextBuy;
    this.subtextDisable = config.TEXTS.subtextDisable;

    // config to a "Card" class
    // card template
    this.CARD_TEMPLATE_SELECTOR = config.CARD_TEMPLATE_SELECTOR;
    this.CARD_SELECTOR = config.CARD_SELECTOR;

    // selectors
    this.CARD_TEXT_SELECTOR = config.CARD_TEXT_SELECTOR;
    this.CARD_SPAN_SELECTOR = config.CARD_SPAN_SELECTOR;

    this.CARD_BOX_SELECTOR = config.CARD_BOX_SELECTOR;
    this.IMAGE_SELECTOR = config.IMAGE_SELECTOR;
    this.STROKE_SELECTOR = config.STROKE_SELECTOR;
    this.TEXT_SELECTOR = config.TEXT_SELECTOR;
    this.TITLE_SELECTOR = config.TITLE_SELECTOR;
    this.SUBTITLE_SELECTOR = config.SUBTITLE_SELECTOR;
    this.PROMO_LIST_SELECTOR = config.PROMO_LIST_SELECTOR;
    this.PROMO_BOX_SELECTOR = config.PROMO_BOX_SELECTOR;
    this.LABEL_SELECTOR = config.LABEL_SELECTOR;
    this.LABEL_NUMBER_SELECTOR = config.LABEL_NUMBER_SELECTOR;
    this.LABEL_TEXT_SELECTOR = config.LABEL_TEXT_SELECTOR;

    // promo template
    this.PROMO_TEMPLATE_SELECTOR = config.PROMO_TEMPLATE_SELECTOR;
    this.PROMO_TEXT_SELECTOR = config.PROMO_TEXT_SELECTOR;
    this.PROMO_SPAN_SELECTOR = config.PROMO_SPAN_SELECTOR;

    // classes
    this.CARD_HOVERED_CLASS = config.CARD_HOVERED_CLASS;
    this.CARD_DISABLED_CLASS = config.CARD_DISABLED_CLASS;
    this.CARD_SELECTED_HOVERED_CLASS = config.CARD_SELECTED_HOVERED_CLASS;
    this.CARD_SELECTED_CLASS = config.CARD_SELECTED_CLASS;
    this.CARD_TEXT_DISABLED_CLASS = config.CARD_TEXT_DISABLED_CLASS;
    this.CARD_SPAN_HOVERED_CLASS = config.CARD_SPAN_HOVERED_CLASS;
    this.CARD_BOX_DISABLED_CLASS = config.CARD_BOX_DISABLED_CLASS;
    this.IMAGE_DISABLED_CLASS = config.IMAGE_DISABLED_CLASS;
    this.LABEL_DISABLED_CLASS = config.LABEL_DISABLED_CLASS;
    this.LABEL_HOVERED_CLASS = config.LABEL_HOVERED_CLASS;
    this.LABEL_SELECTED_HOVERED_CLASS = config.LABEL_SELECTED_HOVERED_CLASS;
    this.LABEL_SELECTED_CLASS = config.LABEL_SELECTED_CLASS;
    this.PROMO_LIST_DISABLED_CLASS = config.PROMO_LIST_DISABLED_CLASS;
    this.STROKE_DISABLED_CLASS = config.STROKE_DISABLED_CLASS;
    this.STROKE_HOVERED_CLASS = config.STROKE_HOVERED_CLASS;
    this.STROKE_SELECTED_HOVERED_CLASS = config.STROKE_SELECTED_HOVERED_CLASS;
    this.STROKE_SELECTED_CLASS = config.STROKE_SELECTED_CLASS;
    this.SUBTITLE_DISABLED_CLASS = config.SUBTITLE_DISABLED_CLASS;
    this.TEXT_DISABLED_CLASS = config.TEXT_DISABLED_CLASS;
    this.TEXT_SELECTED_HOVERED_CLASS = config.TEXT_SELECTED_HOVERED_CLASS;
    this.TITLE_DISABLED_CLASS = config.TITLE_DISABLED_CLASS;

    this.DICTIONARY = config.DICTIONARY;
  }

  // get template card
  getTemplateCard() {
    const cardElement = document
      .querySelector(this.CARD_TEMPLATE_SELECTOR)
      .content
      .querySelector(this.CARD_SELECTOR)
      .cloneNode(true);
    return cardElement;
  }

  // get template promo
  getTemplatePromoTexts() {
    const promoElement = document
      .querySelector(this.PROMO_TEMPLATE_SELECTOR)
      .content
      .querySelector(this.PROMO_BOX_SELECTOR)
      .cloneNode(true);
    return promoElement;
  }

  // CARD STATE START
  // add disabled
  addCardDisabled() {
    this.removeCardHovered();
    this.element.classList.add(this.CARD_DISABLED_CLASS);
    this.cardBoxElement.classList.add(this.CARD_BOX_DISABLED_CLASS);
    this.cardTextElement.classList.add(this.CARD_TEXT_DISABLED_CLASS);
    this.imageElement.classList.add(this.IMAGE_DISABLED_CLASS);
    this.lebelElement.classList.add(this.LABEL_DISABLED_CLASS);
    this.strokeElement.classList.add(this.STROKE_DISABLED_CLASS);
    this.subtitleElement.classList.add(this.SUBTITLE_DISABLED_CLASS);
    this.textElement.classList.add(this.TEXT_DISABLED_CLASS);
    this.titleElement.classList.add(this.TITLE_DISABLED_CLASS);
    this.promoListElement.classList.add(this.PROMO_LIST_DISABLED_CLASS);
    this.cardTextElement.textContent = this.replaceText(this.subtextDisable);
    this.cardSpanElement.textContent = '';
  }

  // CARD HOVERED
  addCardAllHovered() {
    this.element.classList.contains(this.CARD_SELECTED_CLASS)
      ? this.addCardSecectedHovered() : this.addCardHovered();
  }

  removeCardAllHovered() {
    this.element.classList.contains(this.CARD_SELECTED_CLASS)
      ? this.removeCardSecectedHovered() : this.removeCardHovered();
  }

  // add hovered
  addCardHovered() {
    if (!this.element.classList.contains(this.CARD_DISABLED_CLASS)) {
      this.element.classList.add(this.CARD_HOVERED_CLASS);
      this.lebelElement.classList.add(this.LABEL_HOVERED_CLASS);
      this.strokeElement.classList.add(this.STROKE_HOVERED_CLASS);
    }
  }

  // remove hovered
  removeCardHovered() {
    if (!this.element.classList.contains(this.CARD_DISABLED_CLASS)) {
      this.element.classList.remove(this.CARD_HOVERED_CLASS);
      this.lebelElement.classList.remove(this.LABEL_HOVERED_CLASS);
      this.strokeElement.classList.remove(this.STROKE_HOVERED_CLASS);
    }
  }

  // CARD SELECTED HOVERED
  // add selected hovered
  addCardSecectedHovered() {
    this.element.classList.add(this.CARD_SELECTED_HOVERED_CLASS);
    this.lebelElement.classList.add(this.LABEL_SELECTED_HOVERED_CLASS);
    this.strokeElement.classList.add(this.STROKE_SELECTED_HOVERED_CLASS);
    this.textElement.classList.add(this.TEXT_SELECTED_HOVERED_CLASS);
    this.lebelElement.classList.remove(this.LABEL_SELECTED_CLASS);
    this.strokeElement.classList.remove(this.STROKE_SELECTED_CLASS);
    this.textElement.textContent = this.textAfter;
  }

  // remove selected hovered
  removeCardSecectedHovered() {
    this.element.classList.remove(this.CARD_SELECTED_HOVERED_CLASS);
    this.lebelElement.classList.remove(this.LABEL_SELECTED_HOVERED_CLASS);
    this.strokeElement.classList.remove(this.STROKE_SELECTED_HOVERED_CLASS);
    this.textElement.classList.remove(this.TEXT_SELECTED_HOVERED_CLASS);
    this.lebelElement.classList.add(this.LABEL_SELECTED_CLASS);
    this.strokeElement.classList.add(this.STROKE_SELECTED_CLASS);
    this.textElement.textContent = this.text;
  }

  changeCardSelected() {
    this.element.classList.contains(this.CARD_SELECTED_CLASS)
      ? this.removeCardSelected() : this.addCardSelected();
  }

  // add selected
  addCardSelected() {
    this.element.classList.add(this.CARD_SELECTED_CLASS);
    this.lebelElement.classList.add(this.LABEL_SELECTED_CLASS);
    this.strokeElement.classList.add(this.STROKE_SELECTED_CLASS);
    this.cardTextElement.textContent = this.subtextSelected;
    this.cardSpanElement.textContent = '';
  }

  // remove selected classes
  removeCardSelected() {
    this.element.classList.remove(this.CARD_SELECTED_CLASS);
    this.lebelElement.classList.remove(this.LABEL_SELECTED_CLASS);
    this.strokeElement.classList.remove(this.STROKE_SELECTED_CLASS);
    this.element.classList.remove(this.CARD_SELECTED_HOVERED_CLASS);
    this.lebelElement.classList.remove(this.LABEL_SELECTED_HOVERED_CLASS);
    this.strokeElement.classList.remove(this.STROKE_SELECTED_HOVERED_CLASS);
    this.textElement.classList.remove(this.TEXT_SELECTED_HOVERED_CLASS);
    this.textElement.textContent = this.text;
    this.cardTextElement.textContent = `${this.subtext}\u00A0`;
    this.cardSpanElement.textContent = this.subtextBuy;
    this.removeCardHovered();
  }
  // CARD STATE END

  // SPAN STATE START
  // add selected
  addSpanSelected() {
    this.cardSpanElement.classList.add(this.CARD_SPAN_HOVERED_CLASS);
  }

  // remove selected classes
  removeSpanSelected() {
    this.cardSpanElement.classList.remove(this.CARD_SPAN_HOVERED_CLASS);
  }
  // SPAN STATE END

  // set event listeners the "Card" class
  setEventListeners() {
    this.cardBoxElement.addEventListener('click', () => this.changeCardSelected());
    this.cardBoxElement.addEventListener('mouseenter', () => this.addCardAllHovered());
    this.cardBoxElement.addEventListener('mouseleave', () => this.removeCardAllHovered());
    this.cardSpanElement.addEventListener('click', () => this.changeCardSelected());
    this.cardSpanElement.addEventListener('mouseenter', () => this.addSpanSelected());
    this.cardSpanElement.addEventListener('mouseleave', () => this.removeSpanSelected());
  }

  // generate card
  generateCard() {
    // get template card
    this.element = this.getTemplateCard();
    this.cardTextElement = this.element.querySelector(this.CARD_TEXT_SELECTOR);
    this.cardSpanElement = this.element.querySelector(this.CARD_SPAN_SELECTOR);

    this.cardBoxElement = this.element.querySelector(this.CARD_BOX_SELECTOR);
    this.imageElement = this.element.querySelector(this.IMAGE_SELECTOR);
    this.strokeElement = this.element.querySelector(this.STROKE_SELECTOR);
    this.textElement = this.element.querySelector(this.TEXT_SELECTOR);
    this.titleElement = this.element.querySelector(this.TITLE_SELECTOR);
    this.subtitleElement = this.element.querySelector(this.SUBTITLE_SELECTOR);
    this.promoListElement = this.element.querySelector(this.PROMO_LIST_SELECTOR);
    // set text of promo list
    this.promoElements = Object
      .values(this.promoItems)
      .forEach((elem) => this.generatePromoText(elem));

    this.lebelElement = this.element.querySelector(this.LABEL_SELECTOR);
    this.lebelNumberElement = this.element.querySelector(this.LABEL_NUMBER_SELECTOR);
    this.lebelTextElement = this.element.querySelector(this.LABEL_TEXT_SELECTOR);
    // set variables promo list
    this.cardTextElement.textContent = `${this.subtext}\u00A0`;
    this.cardSpanElement.textContent = this.subtextBuy;

    this.imageElement.classList.add(this.imageClass);
    this.textElement.textContent = this.text;
    this.titleElement.textContent = this.title;
    this.subtitleElement.textContent = this.subtitle;
    this.lebelNumberElement.textContent = this.labelNumber;
    this.lebelTextElement.textContent = this.labelText;
    // set iven listeners
    this.disabled ? this.addCardDisabled() : this.setEventListeners();

    return this.element;
  }

  // generate promo
  generatePromoText(elem) {
    // get template promo text
    this.promoBoxElement = this.getTemplatePromoTexts();
    this.promoBoxTextElement = this.promoBoxElement.querySelector(this.PROMO_TEXT_SELECTOR);
    this.promoBoxSpanElement = this.promoBoxElement.querySelector(this.PROMO_SPAN_SELECTOR);
    const [span, text] = this.editPromoText(elem, this.DICTIONARY);
    this.promoBoxSpanElement.textContent = span === '' ? span : `${span}\u00A0`;
    this.promoBoxTextElement.textContent = text;

    this.promoListElement.append(this.promoBoxElement);
  }

  // HELPERS FUNCTIONS START
  // replace item name
  replaceText(string) {
    return string.replace('товар', this.subtitle);
  }

  // return number in a string
  static parseNumber(string) {
    return string.replace(/[^0-9]/g, '');
  }

  // return declension
  static declOfNum(number, words) {
    return words[(number % 100 > 4 && number % 100 < 20)
      ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
  }

  // return correct text for promo text
  editPromoText(string, dictionary) {
    const str = string.toLowerCase().replace(/[^a-zа-яё0-9\s]/gi, ' ');
    const worlds = str.split(' ');
    let number = Card.parseNumber(str);
    if (number === '') return [number, string];
    const wordIndex = Number(worlds.indexOf(number)) + 1;
    const world = worlds[wordIndex];
    dictionary.forEach((elem) => {
      if (elem.includes(world)) {
        this.editedText = Card.declOfNum(number, elem);
      }
    });
    const text = string.replace(`${number} `, '').replace(world, this.editedText);
    if (Number(number) === 1) number = '';
    return [number, text];
  }
  // HELPERS FUNCTIONS END
}
