import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import {generateRandomColor, getMasterMargin} from '../utils/Common';

import Container from '../utils/Container'
import IconAnntated from '../utils/icon/IconAnnotated'
import Icon from '../utils/icon/Icon'

function Bottom(props) {
  const comment_count = props.data['comment_count']
  const like_count = props.data['like_count']
  const share_count = props.data['share_count']

  return (
    <Container style={[styles.main, props.style]}>
      <View style={styles.whitespaceBar}></View>
      <View style={styles.buttonBar}>
        <Icon style={styles.icon}></Icon>
        <Icon style={styles.icon}></Icon>
        <IconAnntated style={styles.icon} text={comment_count}></IconAnntated>
        <IconAnntated style={styles.icon} text={like_count}></IconAnntated>
        <IconAnntated style={styles.icon} text={share_count}></IconAnntated>
        <Icon style={styles.icon}></Icon>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create(
  {
    main: {
      marginBottom: getMasterMargin(),
      backgroundColor: generateRandomColor()
    },
    whitespaceBar: {
      flex: 1,
      backgroundColor: generateRandomColor()
    },
    buttonBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'end',
      height: 60,
      backgroundColor: generateRandomColor()
    },
    icon: {
    }
  }
)

export default Bottom;
