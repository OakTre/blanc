// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import {tabDesctop, tabMobile } from './modules/tabs.js';
import {accordionDesctop, accordionMobile} from './modules/accordion.js';

documenReady(() => {
  lazyIMages();
  tabDesctop();
  tabMobile();
  accordionDesctop();
  accordionMobile();
});
