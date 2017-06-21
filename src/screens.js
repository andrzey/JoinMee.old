import { Navigation } from 'react-native-navigation';

import CreateHappening from './components/createhappening';
import HappeningTab from './components/happeningtab';
import Happening from './components/happening';
import Interests from './components/interests';
import Login from './components/Login';
import SecondTabScreen from './components/SecondTabScreen';

export function registerScreens(store, Provider) {
  Navigation.registerComponent('example.HappeningTab', () => HappeningTab, store, Provider);
  Navigation.registerComponent('example.SecondTabScreen', () => SecondTabScreen, store, Provider);
  Navigation.registerComponent('example.CreateHappening', () => CreateHappening, store, Provider);
  Navigation.registerComponent('example.Happening', () => Happening, store, Provider);
  Navigation.registerComponent('example.Login', () => Login, store, Provider);
  Navigation.registerComponent('example.Interests', () => Interests, store, Provider);
}