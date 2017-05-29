import React, { Component } from 'react';
import { Text } from 'react-native';

class CreateModal extends Component {
    constructor(props) {
        super(props)

        this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
    }
    _onNavigatorEvent(event) {
        if (event.type == 'NavBarButtonPress') {
            if (event.id == 'cancel' || event.id == 'save') {
                this.props.navigator.dismissModal({
                    animationType: 'slide-down'
                });
            }
        }
    }

    render() {
        return (
            <Text>Her er jeg</Text>
        );
    }
}

export default CreateModal;