import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {generateRandomColor} from '../Common';

function Icon(props) {
  return (
    <View style={[styles.main, props.style]}>
    </View>
  );
}



const styles = StyleSheet.create(
  {
    main: {
      width: 40,
      height: 40,
      backgroundColor: generateRandomColor()
    }
  }
)

export default Icon;

