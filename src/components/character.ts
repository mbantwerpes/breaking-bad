import styles from './character.module.css';
import { createElement } from '../utils/createElement';
import { CharacterFromAPI } from '../types';

export function createCharacterCard({
  name,
  img,
  status,
  nickname,
  portrayed,
}: CharacterFromAPI): HTMLElement {
  return createElement('div', {
    className: styles.card,
    childElements: [
      createElement('img', {
        src: img,
        className: styles.cardImg,
      }),
      createElement('div', {
        className: styles.cardContent,
        childElements: [
          createElement('h3', {
            innerText: `${name} - ${nickname}`,
            className: styles.cardName,
          }),
          createElement('div', {
            className: styles.aliveContainer,
            childElements: [
              createElement('div', {
                className: `${
                  status === 'Alive'
                    ? styles.aliveIndicator
                    : status === 'Unknown'
                    ? styles.unknownIndicator
                    : styles.deadIndicator
                }`,
              }),
              createElement('p', {
                innerText: `${status}`,
                className: styles.aliveDescription,
              }),
            ],
          }),
          createElement('h4', {
            innerText: 'Portrayed by:',
            className: styles.subheader,
          }),
          createElement('p', {
            innerText: portrayed,
            className: styles.subheaderDescriptionSpacer,
          }),
        ],
      }),
    ],
  });
}
