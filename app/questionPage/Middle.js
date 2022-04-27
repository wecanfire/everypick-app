import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import {generateRandomColor, getMasterMargin} from '../utils/Common';

import Container from '../utils/Container'
import UserIcon from './UserIcon'
import Hashtag from '../utils/Hashtag'

function Middle(props) {
  const username = props.data['writer']
  const question = props.data['question']
  const hashtags = props.data['hashtags'] 

  return (
    <Container style={props.style}>
      <View style={styles.userIconBar}>
        <UserIcon username={username}></UserIcon>
      </View>
      <View style={styles.questionBox}>
        <Text style={styles.question}>{question}</Text>
        <View style={styles.hashtagRows}>
          {hashtags.map((hashtag, i) => (
            <Hashtag tag={hashtag} style={styles.hashtag}/>
          ))}
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create(
  {
    userIconBar: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 60,
      backgroundColor: generateRandomColor()
    },
    questionBox: {
      flexDirection: 'column',
      justifyContent: 'center',
      flex: 1,
      marginLeft: 15,
      backgroundColor: generateRandomColor()
    },
    question: {
      fontSize: 32,
      backgroundColor: generateRandomColor()
    },
    hashtagRows: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: generateRandomColor()
    },
    hashtag: {
      marginHorizontal: 5
    }
  }
)

export default Middle;
