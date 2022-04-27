import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Container from '../utils/Container';

import Header from './Header'
import Top from './Top';
import Middle from './Middle';
import Bottom from './Bottom';

function Main(props) {
  // 데이터 여기서 받아올 것
  const questionData = require('../assets/question_data.json')

  return (
    <View style={styles.main}>
      <Header></Header>
      <Top style={styles.top}/>
      <Middle style={styles.middle} data={questionData}/>
      <Bottom style={styles.bottom} data={questionData}/>
    </View>
  );
}


const styles = StyleSheet.create(
  {
    main: {
      flex: 1,
      backgroundColor: 'yellow',
      flexDirection: 'column',
    },
    top: {
      flex: 17,
    },
    middle: {
      flex: 60
    },
    bottom: {
      flex: 23
    }
  }
)

export default Main;
