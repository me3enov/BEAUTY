// import CSS
import './main.global.sass';
// import constants
import {
  apiConfig,
  cardsListSelector,
  configCard,
} from '../utils/constants';
// IMPORT MODULES START
import Api from '../components/Api';
import Card from '../components/Card';
import Section from '../components/Section';
// IMPORT MODULES END

// FUNCTION START
// create new card
const createCard = (cardData) => {
  const card = new Card(cardData, configCard);
  return card.generateCard();
};

// all cards init
const cards = new Section({
  renderer: (item) => {
    // create card
    const card = createCard(item);
    // add card to the page
    cards.addItem(card, 'append');
  },
}, cardsListSelector);
// api init
const api = new Api(apiConfig);

// get all data init
api.getFoodItems()
  .then((data) => {
    // render all cards
    const [items, texts] = Object.values(data);
    configCard.TEXTS = texts;
    // render all cards
    cards.renderItems(items);
  })
  .catch((err) => {
  // error log
    // eslint-disable-next-line no-console
    console.log(err);
  });
// FUNCTION END
