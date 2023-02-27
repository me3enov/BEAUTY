import './main.global.sass';
import { dataForPage } from '../assets/data/DATA';
import { MenuItem } from '../components/MenuItem';
import { Card } from '../components/Card';
import { InfoBlockItem } from '../components/InfoBlockItem';
import { SocialIconsItem } from '../components/SocialIconsItem';
import { Section } from '../components/Section';

const submenu = Object.values(dataForPage.submenu);
const menu = Object.values(dataForPage.menu);
const specialOffersProducts = Object.values(dataForPage.specialOffersProducts);
const infoBlockItems = Object.values(dataForPage.infoBlockItems);
const socialIcons = Object.values(dataForPage.socialIcons);

// create new submenu item
const createSubmenuItem = (itemData, selectors) => {
  const menuItem = new MenuItem(itemData, selectors);
  return menuItem.generateMenuItem();
};

// create new main menu item
const createMainMenuItem = (itemData, selectors) => {
  const menuItem = new MenuItem(itemData, selectors);
  return menuItem.generateMenuItem();
};

// create new card
const createCard = (cardData) => {
  const card = new Card(cardData);
  return card.generateCard();
};

// create new info block item
const createInfoBlockItem = (itemData) => {
  const menuItem = new InfoBlockItem(itemData);
  return menuItem.generateInfoBlockItem();
};

// create new social icon
const createSocialIconsItem = (itemData) => {
  const menuItem = new SocialIconsItem(itemData);
  return menuItem.generateSocialIconsItem();
};

// submenu items init
const submenuItems = new Section(
  {
    renderer: (item) => {
      // create submenu item
      const menuItem = createSubmenuItem(item, {
        templateSelector: '#submenu-item-template',
        itemSelector: '.submenu__item',
        linkSelector: '.submenu__link'
      });
      // add submenu item to the page
      submenuItems.addItem(menuItem, 'append');
    }
  },
  '.submenu__list'
);

// main menu items init
const mainMenuItems = new Section(
  {
    renderer: (item) => {
      // create main menu item
      const menuItem = createMainMenuItem(item, {
        templateSelector: '#menu-item-template',
        itemSelector: '.menu__item',
        linkSelector: '.menu__link'
      });
      // add main menu item to the page
      mainMenuItems.addItem(menuItem, 'append');
    }
  },
  '.menu__list'
);

// cards init
const cards = new Section(
  {
    renderer: (item) => {
      // create card
      const card = createCard(item);
      // add card to the page
      cards.addItem(card, 'append');
    }
  },
  '.special-offers__list'
);

// info block items init
const infoItems = new Section(
  {
    renderer: (item) => {
      // create card
      const card = createInfoBlockItem(item);
      // add card to the page
      infoItems.addItem(card, 'append');
    }
  },
  '.info-block__list'
);

// social icons init
const socialIconsItems = new Section(
  {
    renderer: (item) => {
      // create social icon
      const menuItem = createSocialIconsItem(item);
      // add social icon to the page
      socialIconsItems.addItem(menuItem, 'append');
    }
  },
  '.social-links-menu__list'
);

// render all
submenuItems.renderItems(submenu);
mainMenuItems.renderItems(menu);
cards.renderItems(specialOffersProducts);
infoItems.renderItems(infoBlockItems);
socialIconsItems.renderItems(socialIcons);
// FUNCTION END
