import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Container from '../utils/Container';


function Main(props) {
  // 데이터 여기서 받아올 것
  const questionData = require('../assets/question_data.json')

  return (
    <Container>
      <Text>comment page</Text>
    </Container>
  );
}


const styles = StyleSheet.create(
  {
    main: {
      flex: 1,
      backgroundColor: 'yellow',
      flexDirection: 'column',
    }
  }
)

export default Main;
