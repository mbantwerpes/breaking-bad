import styles from './style.css';
import { createElement } from './utils/createElement';
import { getCharacters } from './utils/api';
import { createCharacterCard } from './components/character/character';

const app = document.querySelector<HTMLDivElement>('#app');

// console.log(await getCharacters());

const mainElement = createElement('main', {
  childElements: [
    createElement('body', {
      childElements: [
        createElement('main', {
          className: 'container',
          childElements: [],
        }),
      ],
    }),
  ],
});

if (app !== null) {
  app.append(mainElement);
}
