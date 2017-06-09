import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import { registerScreens } from './screens';
import { iconsLoaded } from './utils/app-icons';
import configureStore from './store/configure-store';

const store = configureStore()
const state = store.getState();

registerScreens(store, Provider);

export default () => {
    if (state.user.accessToken) {
        startTabBasedApp()
    } else {
        iconsLoaded.then(() => {
            Navigation.startSingleScreenApp({
                screen: {
                    screen: 'example.Login',
                    title: 'Login',
                    navigatorStyle: {},
                    navigatorButtons: {}
                }
            });
        });
    }
}


export function startTabBasedApp() {
    Navigation.startSingleScreenApp({
        screen: {
            screen: 'example.FirstTabScreen',
            title: 'App',
            navigatorStyle: {},
            topTabs: [
                {
                    screenId: 'example.FirstTabScreen',
                    title: 'Happenings'
                },
                {
                    screenId: 'example.SecondTabScreen',
                    title: 'Mine Happenings'
                }
            ]
        },
        passProps: {},
        animationType: 'slide-down'
    });
}
