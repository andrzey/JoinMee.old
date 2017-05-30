import { Navigation } from 'react-native-navigation';

import FirstTabScreen from './components/FirstTabScreen';
import SecondTabScreen from './components/SecondTabScreen';
import CreateModal from './components/CreateModal';
import Happening from './components/Happening';

export function registerScreens(store, Provider) {
  Navigation.registerComponent('example.FirstTabScreen', () => FirstTabScreen, store, Provider);
  Navigation.registerComponent('example.SecondTabScreen', () => SecondTabScreen, store, Provider);
  Navigation.registerComponent('example.CreateModal', () => CreateModal, store, Provider);
  Navigation.registerComponent('example.Happening', () => Happening, store, Provider);
}