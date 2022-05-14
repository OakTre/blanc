// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import tabs from './modules/tabs.js';
import accordion from './modules/accordion.js';

documenReady(() => {
  lazyIMages();
  tabs();
  accordion();
});
