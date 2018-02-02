import React from 'react';
import { View } from 'react-native';

const CardSection = (props) =>
    <View style={styles.containerStyle}>
        {props.children}
    </View>;

const styles = {
    containerStyle: {
        borderColor: '#ddd',
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    }
};

export default CardSection;
