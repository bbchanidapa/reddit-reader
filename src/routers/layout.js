import { Actions } from 'react-native-router-flux';

const ACTION_PAGES = [
  {
    id: 'main-tab-home',
    name: 'Home',
    icon: 'home',
    action: () => Actions.contentPage({ type: 'replace' })
  },
  {
    id: 'main-tab-search',
    name: 'Search',
    icon: 'search',
    action: () => Actions.searchPage({ type: 'replace' })
  },
  {
    id: 'main-tab-setting',
    name: 'Settings',
    icon: 'settings',
    action: () => Actions.settingPage({ type: 'replace' })
  }
];

export default ACTION_PAGES;
