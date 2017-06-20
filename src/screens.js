import { Navigation } from 'react-native-navigation';

import CreateModal from './components/CreateModal';
import FirstTabScreen from './components/FirstTabScreen';
import Happening from './components/Happening';
import InterestsModal from './components/interests/interests-modal';
import Login from './components/Login';
import SecondTabScreen from './components/SecondTabScreen';

export function registerScreens(store, Provider) {
  Navigation.registerComponent('example.FirstTabScreen', () => FirstTabScreen, store, Provider);
  Navigation.registerComponent('example.SecondTabScreen', () => SecondTabScreen, store, Provider);
  Navigation.registerComponent('example.CreateModal', () => CreateModal, store, Provider);
  Navigation.registerComponent('example.Happening', () => Happening, store, Provider);
  Navigation.registerComponent('example.Login', () => Login, store, Provider);
  Navigation.registerComponent('example.InterestsModal', () => InterestsModal, store, Provider);
}