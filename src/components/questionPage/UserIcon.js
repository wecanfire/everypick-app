import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {generateRandomColor} from '../utils/Common';

function UserIcon(props) {
  const username = props.username

  return (
    <View style={[styles.main, props.style]}>
      <View style={styles.face}></View>
      <Text style={styles.text}>{username}</Text>
    </View>
  );
}



const styles = StyleSheet.create(
  {
    main: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      height: 50,
      backgroundColor: generateRandomColor()
    },
    face: {
      width: 50,
      height: 50,
      backgroundColor: generateRandomColor()
    },
    text: {
      fontSize: 16,
      backgroundColor: generateRandomColor()
    }
  }
)

export default UserIcon;

