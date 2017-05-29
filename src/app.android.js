import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import { registerScreens } from './screens';
import { iconsLoaded } from './utils/app-icons';
import configureStore from './store/configure-store';

const store = configureStore()

registerScreens(store, Provider);

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