import DICTIONARY from './dictionary';
// api config for class Api
export const apiConfig = {
  HEADERS: {
    'Content-Type': 'application/json',
    "'Accept'": 'application/json',
  },
  URL: '',
  DATA_URL: 'src/data',
  CAT_FOOD: '/cat-food/',
  NYMUSHKA: 'nymushka.json',
  ERROR_TEXT: 'ERROR: ',
};

// container for the cards
export const cardsListSelector = '.gallery';

// card config for "Card" class
export const configCard = {
  CARD_TEMPLATE_SELECTOR: '#card-template',
  CARD_SELECTOR: '.card',
  CARD_TEXT_SELECTOR: '.card__text',
  CARD_SPAN_SELECTOR: '.card__span',
  CARD_BOX_SELECTOR: '.card-box',
  IMAGE_SELECTOR: '.card-box__image',
  STROKE_SELECTOR: '.card-box__stroke',
  TEXT_SELECTOR: '.card-box__text',
  TITLE_SELECTOR: '.card-box__title',
  SUBTITLE_SELECTOR: '.card-box__subtitle',
  PROMO_LIST_SELECTOR: '.card-box__promo-list',
  PROMO_BOX_SELECTOR: '.card-box__promo-box',
  PROMO_TEMPLATE_SELECTOR: '#promo-list-template',
  PROMO_TEXT_SELECTOR: '.card-box__promo-text',
  PROMO_SPAN_SELECTOR: '.card-box__promo-span',
  LABEL_SELECTOR: '.card-box__label',
  LABEL_NUMBER_SELECTOR: '.card-box__label-number',
  LABEL_TEXT_SELECTOR: '.card-box__label-text',
  CARD_HOVERED_CLASS: 'card_hovered',
  CARD_DISABLED_CLASS: 'card_disabled',
  CARD_SELECTED_HOVERED_CLASS: 'card_selected-hovered',
  CARD_SELECTED_CLASS: 'card_selected',
  CARD_TEXT_DISABLED_CLASS: 'card__text_disabled',
  CARD_SPAN_HOVERED_CLASS: 'card__span_hovered',
  CARD_BOX_DISABLED_CLASS: 'card-box_disabled',
  IMAGE_DISABLED_CLASS: 'card-box__image_disabled',
  LABEL_DISABLED_CLASS: 'card-box__label_disabled',
  LABEL_HOVERED_CLASS: 'card-box__label_hovered',
  LABEL_SELECTED_HOVERED_CLASS: 'card-box__label_selected-hovered',
  LABEL_SELECTED_CLASS: 'card-box__label_selected',
  PROMO_LIST_DISABLED_CLASS: 'card-box__promo-list_disabled',
  STROKE_DISABLED_CLASS: 'card-box__stroke_disabled',
  STROKE_HOVERED_CLASS: 'card-box__stroke_hovered',
  STROKE_SELECTED_HOVERED_CLASS: 'card-box__stroke_selected-hovered',
  STROKE_SELECTED_CLASS: 'card-box__stroke_selected',
  SUBTITLE_DISABLED_CLASS: 'card-box__subtitle_disabled',
  TEXT_DISABLED_CLASS: 'card-box__text_disabled',
  TEXT_SELECTED_HOVERED_CLASS: 'card-box__text_selected-hovered',
  TITLE_DISABLED_CLASS: 'card-box__title_disabled',
  TEXTS: '',
  DICTIONARY,
};
