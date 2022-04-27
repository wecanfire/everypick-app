import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {generateRandomColor, getMasterMargin} from './Common'

/* 
상하좌우 기본 margin 이 적용된 최상위 뷰
*/
function Container(props) {
  return (
    <View style={[styles.main, props.style]}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create(
  {
    main: {
      marginHorizontal: 30,
      backgroundColor: generateRandomColor()
    },
  }
);

export default Container;
