import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Input = ({ label, value, placeholder, onChangeText, isPassword }) => {
    const { labelStyle, inputStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput value={value} onChangeText={onChangeText} style={inputStyle} 
                autoCorrect={false} placeholder={placeholder} secureTextEntry={isPassword}
            />
        </View>
    );
};

const styles = {
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    inputStyle: {
        color: '#000',
        fontSize: 18,
        paddingRight: 5,
        paddingLeft: 5,
        lineHeight: 23,
        flex: 2
    },
    viewStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };
