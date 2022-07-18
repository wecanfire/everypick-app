import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


const ThumbIcon = ({count, style}) => {
    return (
        <View style={styles.main}>
            <View style={[styles.icon, style]}/>
            <Text>{count}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    main: {
        width: 60, flexDirection: 'row',
    }, icon: {
        width: 20, height: 20, marginRight: 5,
    },
});

export default ThumbIcon;
