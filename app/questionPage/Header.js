import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import {generateRandomColor, getMasterMargin} from '../utils/Common';

import Icon from '../utils/icon/Icon'
import Hashtag from '../utils/Hashtag'

function Header(props) {
  return (
    <View style={styles.main}>
      <View style={styles.row}>
        <Hashtag fontSize={20} tag={'this is a tag'}></Hashtag>
        <Icon style={styles.searchIcon}></Icon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    main: {
      height:50,
      backgroundColor: generateRandomColor()
    },
    row: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: getMasterMargin(),
      backgroundColor: generateRandomColor()
    }
  }
)

export default Header;
