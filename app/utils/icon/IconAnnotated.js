import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {generateRandomColor} from '../Common';

var defaultText = '###'

function IconAnnotated(props) {
  const text = (props.text === 'undefined') ? defaultText: props.text

  return (
    <View style={styles.main}>
      <Text style={styles.text}>{text}</Text>
      <View style={[styles.icon, props.style]}>
      </View>
    </View>
  );
}



const styles = StyleSheet.create(
  {
    main: {
      flexDirection: 'column'
    },
    text: {
      textAlign: 'center',
      textAlignVertical: 'bottom',
      fontSize: 15
    },
    icon: {
      width: 40,
      height: 40,
      backgroundColor: generateRandomColor()
    }
  }
)

export default IconAnnotated;

