import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {generateRandomColor} from '../utils/Common';

import HorizontalMarginedContainer from '../utils/HorizontalMarginedContainer'
import IconAnntated from '../utils/icon/IconAnnotated'
import Icon from '../utils/icon/Icon'

function Bottom({data, bottomSheetModalRef, style}) {

    const handleCommentButtonPress = () => {
        console.log('pressing comment button')
        bottomSheetModalRef.current.present();
    }

    // 임시 아이콘 상자 랜더링
    const genIconBox = () => <View style={styles.iconBox}/>

    return (
        <HorizontalMarginedContainer style={[styles.main, style]}>
            <View style={styles.buttonBar}>
                <Icon name={'button 1'}>{genIconBox()}</Icon>
                <Icon name={'button 2'}>{genIconBox()}</Icon>
                <IconAnntated name='comment' text={data.commentCount}
                              onPressCallback={handleCommentButtonPress}>{genIconBox()}</IconAnntated>
                <IconAnntated name='like' text={data.likeCount}>{genIconBox()}</IconAnntated>
                <Icon name='share' text={data.shareCount}>{genIconBox()}</Icon>
                <Icon name='etc'>{genIconBox()}</Icon>
            </View>
        </HorizontalMarginedContainer>
    );
}

const styles = StyleSheet.create(
    {
        main: {
            backgroundColor: generateRandomColor()
        },
        buttonBar: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            height: 70,
            backgroundColor: generateRandomColor()
        },
        iconBox: {
            width: 50,
            height: 50,
            backgroundColor: generateRandomColor()
        }
    }
)

export default Bottom;
