import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text, TextInput, TouchableOpacity } from 'react-native';

class AutoCompleteInterests extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                { key: 1, name: 'Andrzej' },
                { key: 2, name: 'Kristian' },
                { key: 3, name: 'Tonje' },
                { key: 4, name: 'Henriette' },
                { key: 5, name: 'Morten' },
                { key: 6, name: 'Olaf' },
                { key: 7, name: 'Rinnan' },
                { key: 8, name: 'Arnt' },
            ],
            searchQuery: '',
            selectedInterests: []
        }

        this._findData = this._findData.bind(this);
        this._onItemSelected = this._onItemSelected.bind(this);
    }

    render() {
        const interests = this._findData(this.state.searchQuery);

        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Interesser'
                        onChangeText={(text) => this.setState({ searchQuery: text })}
                    />
                    <View style={styles.selectedInterestContainer}>
                        <View style={styles.selectedInterestItem}/>
                    </View>
                </View>
                <View style={styles.listContainer}>
                    <FlatList
                        style={styles.listItem}
                        data={interests}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => this._onItemSelected(item)}>
                                <Text>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
        );
    }

    _onItemSelected(item) {
        this.setState({
            selectedInterest: this.state.selectedInterests.push(item.name),
            searchQuery: ''
        });
    }

    _findData(query) {
        if (query === '') {
            return [];
        }

        const { data } = this.state;
        const regex = new RegExp(`${query.trim()}`, 'i');
        const result = data.filter(item => item.name.search(regex) >= 0);
        return result;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    inputContainer: {
        backgroundColor: 'transparent'
    },
    textInput: {
        height: 60,
        marginTop: 0,
        marginRight: 5,
        marginBottom: 0,
        marginLeft: 5,
        fontSize: 15,
        backgroundColor: 'blue',
        color: '#333333'
    },
    listContainer: {
        backgroundColor: 'green',
    },
    listItem: {
        position: 'absolute',
        left: 0,
        right: 0
    },
    selectedInterestContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: 20,
        width: 20,
        backgroundColor: 'black',
    },
    selectedInterestItem: {
        height: 60,
        width: 60,
        marginLeft: 5
    }
});
export default AutoCompleteInterests;