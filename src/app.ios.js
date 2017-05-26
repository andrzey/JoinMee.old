import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import { iconsMap, iconsLoaded } from './utils/app-icons';

registerScreens();

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
                    title: 'Screen One'
                },
                {
                    label: 'Two',
                    screen: 'example.SecondTabScreen',
                    icon: iconsMap['ios-person--active'],
                    title: 'Screen Two'
                }
            ]
        });
    }
}

export default App