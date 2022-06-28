import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {generateRandomColor, getMasterMargin} from '../utils/Common';

import HorizontalMarginedContainer from '../utils/HorizontalMarginedContainer'

function Top(props) {
  return (
    <HorizontalMarginedContainer style={[styles.main, props.style]}>
      <View style={styles.ad}></View>
    </HorizontalMarginedContainer>
  );
}

const styles = StyleSheet.create(
  {
    main: {
      backgroundColor: generateRandomColor()
    },
    ad: {
      flex: 1,
      backgroundColor: generateRandomColor()
    }
  }
)

export default Top;
