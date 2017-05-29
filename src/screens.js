import { Navigation } from 'react-native-navigation';

import FirstTabScreen from './components/FirstTabScreen';
import SecondTabScreen from './components/SecondTabScreen';
import CreateModal from './components/CreateModal';

export function registerScreens(store, Provider) {
  Navigation.registerComponent('example.FirstTabScreen', () => FirstTabScreen, store, Provider);
  Navigation.registerComponent('example.SecondTabScreen', () => SecondTabScreen, store, Provider);
  Navigation.registerComponent('example.CreateModal', () => CreateModal, store, Provider);
}