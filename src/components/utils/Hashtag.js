import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {generateRandomColor} from './Common';

// 기본 텍스트 View 높이
const DEFAULT_HEIGHT = 20

const Hashtag = ({style, tag, selectable}) => {

    return (
        <View
            style={[styles.main, style]}
            selectable={selectable}
        >
            <Text>
                # {tag}
            </Text>
        </View>
    );
}


const styles = StyleSheet.create(
    {
        main: {
            height: DEFAULT_HEIGHT,
            justifyContent: 'center',
            backgroundColor: generateRandomColor()
        }
    }
)

export default Hashtag;

