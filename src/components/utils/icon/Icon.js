import * as React from 'react';
import { Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import {generateRandomColor} from '../Common';

function Icon({style, name, onPressCallback, children}) {
  // 버튼 클릭시 콜백 미지정시 기본 콜백 사용(디버깅용)
  const defaultOnPressCallback = () => {
    console.log(`button "${name}" pressed`)
  }
  onPressCallback = (typeof onPressCallback === 'undefined') ? defaultOnPressCallback : onPressCallback

  // TouchableHighlight 는 무조건 children 을 가져야함
  children = (typeof children === 'undefined') ? (<View></View>) : children
  return (
    <TouchableHighlight style={[styles.main, style]} onPress={onPressCallback} underlayColor="white">
      {children}
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create(
  {
    main: {
      backgroundColor: generateRandomColor()
    },
    icon: {
      width: 40,
      height: 40,
      backgroundColor: generateRandomColor()

    }
  }
)

export default Icon;

