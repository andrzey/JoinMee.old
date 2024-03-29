// Define all your icons once,
// load them once,
// and use everywhere

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// define your suffixes by yourself..
// here we use active, big, small, very-big..
const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
    "ios-heart": [30, "#bbb"],
    "ios-contact-outline": [30, "#000"],
    "ios-settings":[25, "#bbb"],

    "ios-add": [30, "#bbb"],
    "ios-add--big": [50, "#bbb"],

    "ios-person": [30, "#bbb"],
    "ios-person--big": [50, "#bbb"],

    "ios-person--active": [30, "#fff"],
    "ios-person--active--big": [50, "#fff"],
    "ios-person--active--very-big": [100, "#fff"],

    "ios-people": [30, "#bbb"],
    "ios-people--active": [30, "#fff"],

    "done": [30, "#000000", MaterialIcons],
    "add": [30, "#000000", MaterialIcons],
    "settings": [30, "#000000", MaterialIcons]

}

const defaultIconProvider = Ionicons;

let iconsMap = {};
let iconsLoaded = new Promise((resolve, reject) => {
    new Promise.all(
        Object.keys(icons).map(iconName => {
            const Provider = icons[iconName][2] || defaultIconProvider; // Ionicons
            return Provider.getImageSource(
                iconName.replace(replaceSuffixPattern, ''),
                icons[iconName][0],
                icons[iconName][1]
            )
        })
    ).then(sources => {
        Object.keys(icons)
            .forEach((iconName, idx) => iconsMap[iconName] = sources[idx])

        // Call resolve (and we are done)
        resolve(true);
    }).catch((error) => {
        console.log(error)
        reject(error);
    })
});

export {
    iconsMap,
    iconsLoaded
};