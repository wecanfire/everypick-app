import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import {generateRandomColor, getMasterMargin} from '../utils/Common';

import HorizontalMarginedContainer from '../utils/HorizontalMarginedContainer'
import Icon from '../utils/icon/Icon'
import Hashtag from '../utils/Hashtag'

function Header(props) {
  return (
    <HorizontalMarginedContainer style={styles.main}>
      <View style={styles.row}>
        <Hashtag fontSize={20} tag={'this is a tag'}></Hashtag>
        <Icon style={styles.searchIcon}></Icon>
      </View>
    </HorizontalMarginedContainer>
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
      backgroundColor: generateRandomColor()
    }
  }
)

export default Header;
