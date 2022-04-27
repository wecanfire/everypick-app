import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar, Dimensions } from 'react-native';

import Main from './questionPage/Main'

/*
status, navigation 사이에 매인 view 배치
*/

export default function App() {
  // 상하 오프셋
  const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24
  const SCREEN_HEIGHT = Dimensions.get('screen').height
  const WINDOW_HEIGHT = Dimensions.get('window').height
  const BOTTOM_NAVIGATION_BAR_HEIGHT = SCREEN_HEIGHT - WINDOW_HEIGHT - STATUS_BAR_HEIGHT - STATUS_BAR_HEIGHT
  
  return (
    <View style={{flex: 1}}>
      <View style={{height: STATUS_BAR_HEIGHT, backgroundColor:'grey'}}></View>
      <Main style={styles.main}></Main>
      <View style={{height: BOTTOM_NAVIGATION_BAR_HEIGHT, backgroundColor:'grey'}}></View>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    main: {
      flex: 1
    }
  }
)
