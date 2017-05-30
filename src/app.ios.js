import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import { registerScreens } from './screens';
import { iconsMap, iconsLoaded } from './utils/app-icons';
import configureStore from './store/configure-store';

const store = configureStore()

registerScreens(store, Provider);

class App extends Component {
    constructor(props) {
        super(props);

        iconsLoaded.then(() => {
            this.startApp();
        });
    }

    startApp() {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    label: 'One',
                    screen: 'example.FirstTabScreen',
                    icon: iconsMap['ios-person--active'],
                    title: 'Happenings'
                },
                {
                    label: 'Two',
                    screen: 'example.SecondTabScreen',
                    icon: iconsMap['ios-person--active'],
                    title: 'Mine Happenings'
                }
            ]
        });
    }
}

export default App