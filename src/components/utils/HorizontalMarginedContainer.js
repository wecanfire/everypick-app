import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {generateRandomColor, getMasterMargin} from './Common'

/* 
상하좌우 기본 margin 이 적용된 최상위 뷰
*/
function HorizontalMarginedContainer({style, children, ...leftover}) {
  return (
    <View
      style={[styles.main, style]}
      {...leftover}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create(
  {
    main: {
      marginHorizontal: 20,
      backgroundColor: generateRandomColor()
    },
  }
);

export default HorizontalMarginedContainer;
