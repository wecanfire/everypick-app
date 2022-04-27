import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {generateRandomColor} from './Common';

// 기본 텍스트 View 높이
const defaultHeight = 20

function Hashtag(props) {
  const tag = props.tag
  const fontSize = props.fontSize
  // View 크기가 너무 작다면 키운다
  const height = Math.max(defaultHeight, fontSize)

  return (
    <View style={[styles.main, {height: height}]}>
      <Text style={[styles.text, props.style, {fontSize: fontSize}]}># {tag}</Text>
    </View>
  );
}



const styles = StyleSheet.create(
  {
    main: {
      defaultHeight: 20,
      justifyContent: 'center',
      backgroundColor: generateRandomColor()
    },
    text: {
    }
  }
)

export default Hashtag;

