import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {generateRandomColor, getMasterMargin} from '../utils/Common';
import Icon from '../utils/icon/Icon'
import Hashtag from '../utils/Hashtag'

function Top(props) {
  return (
    <View style={[styles.main, props.style]}>
      <View style={styles.ad}></View>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    main: {
      marginHorizontal: getMasterMargin(),
      backgroundColor: generateRandomColor()
    },
    search: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height:50,
      backgroundColor: generateRandomColor()
    },
    ad: {
      flex: 1,
      backgroundColor: generateRandomColor()
    }
  }
)

export default Top;
