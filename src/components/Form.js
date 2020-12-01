import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Picker } from '@react-native-community/picker';
import colors from '../utils/colors';

export default function Form(props) {
    const {setCapital, setInterest, setMonths, months} = props;

    return (
        <View style={style.viewForm}>
            <View style={style.viewInputs}>
                <TextInput
                    placeholder="Cantidad a pedir"
                    keyboardType="numeric"
                    style={style.input}
                    onChange={(e) => setCapital(e.nativeEvent.text)}
                ></TextInput>

                <TextInput
                    style={[style.input, style.inputPercent]}
                    keyboardType="numeric"
                    placeholder="Interes %"
                    onChange={(e) => setInterest(e.nativeEvent.text)}
                ></TextInput>
            </View>

            <Picker
                selectedValue={months}
                style={picketSelectStyles.inputAndroid}
                onValueChange={(itemValue, itemIndex) =>
                    setMonths(itemValue)
                }>
                <Picker.Item label="3 Meses" value="3" />
                <Picker.Item label="6 Meses" value="6" />
                <Picker.Item label="12 Meses" value="12" />
                <Picker.Item label="24 Meses" value="24" />
            </Picker>
        </View>
    );
}

const style = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: 0,
        width: '85%',
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: 'center'
    },
    viewInputs: {
        flexDirection: 'row'
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: '60%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 20
    },
    inputPercent: {
        width: "40%",
        marginLeft: 5
    }
})

const picketSelectStyles = StyleSheet.create({
    inputIos: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal:10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#fff',
        marginLeft: -5,
        marginRight: -5
    },
    inputAndroid: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal:10,
        borderWidth: 0.5,
        backgroundColor: '#fff',
        color: 'black',
        borderRadius: 8,
        paddingRight: 30
    }
});