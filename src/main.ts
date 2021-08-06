import styles from './style.module.css';
import { createElement } from './utils/createElement';

const app = document.querySelector<HTMLDivElement>('#app');

const mainElement = createElement('main', {
  childElements: [
    createElement('body', {
      childElements: [
        createElement('main', {
          className: styles.container,
          childElements: [],
        }),
      ],
    }),
  ],
});

if (app !== null) {
  app.append(mainElement);
}
