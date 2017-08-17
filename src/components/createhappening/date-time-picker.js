import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import { StyleSheet } from 'react-native';

class DateTimePicker extends Component {
    constructor(props) {
        super(props);

        this._onDateChange = this._onDateChange.bind(this);
    }

    render() {
        return (
            <DatePicker
                style={styles.container}
                date={this.props.dateTime}
                mode='datetime'
                format='D[.] MMMM [kl.] HH:mm'
                confirmBtnText='Ok'
                cancelBtnText='Avbryt'
                showIcon={false}
                customStyles={
                    {
                        dateInput: styles.dateInput,
                        dateText: styles.dateText,
                        dateTouchBody: styles.dateTouchBody
                    }
                }
                minuteInterval={30}
                is24Hour={true}
                onDateChange={this._onDateChange}
            />
        );
    }

    _onDateChange(dateTime) {
        this.props.onDateChange(dateTime)
    }
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: null,
        backgroundColor: 'transparent',
        flex: 1,
        marginLeft: 5,
        marginRight: 5
    },
    dateInput: {
        borderWidth: 0,
        alignItems: 'flex-start',
    },
    dateText: {
        fontSize: 15
    },
    dateTouchBody: {
        flex: 1,
    }
});

export default DateTimePicker;