import styles from './style.css';
import { createElement } from './utils/createElement';
import { getCharacters } from './utils/api';
import { createCharacterCard } from './components/character';
import type { CharacterFromAPI } from './types';

const app = document.querySelector<HTMLDivElement>('#app');

const charArr: CharacterFromAPI[] = await getCharacters();

const characterContainer = createElement('div', {
  className: 'characterContainer',
  childElements: charArr.map((character) => createCharacterCard(character)),
});

const mainElement = createElement('main', {
  childElements: [
    createElement('body', {
      childElements: [
        createElement('main', {
          className: 'container',
          childElements: [characterContainer],
        }),
      ],
    }),
  ],
});

if (app !== null) {
  app.append(mainElement);
}
