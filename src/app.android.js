import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import { iconsMap, iconsLoaded } from './utils/app-icons';

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'example.FirstTabScreen',
    title: 'App',
    navigatorStyle: {},
    topTabs: [
      {
        screenId: 'example.FirstTabScreen',
        title: 'Alarms'
      },
      {
        screenId: 'example.SecondTabScreen',
        title: 'Groups'
      }
    ]
  },
  passProps: {},
  animationType: 'slide-down'
});