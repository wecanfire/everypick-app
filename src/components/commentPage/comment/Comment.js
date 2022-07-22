import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import HorizontalMarginedContainer from '../../utils/HorizontalMarginedContainer'
import {generateRandomColor} from '../../utils/Common'
import Icon from '../../utils/icon/Icon'
import {setComment} from '../../api/comment/CommentApi'
import ThumbIcon from "./ThumbIcon";
import TextWrapper from "./TextWrapper";

const TEXT_LENGTH_MAX = 255
const CASE_LIKE = 'CASE_LIKE'
const CASE_DISLIKE = 'CASE_DISLIKE'

// comment 좋아요 처리
const reducer = (state, action) => {
    switch (action.type) {
        case CASE_LIKE: {
            if (state.writerPress === -1) {
                state.dislikeCount -= 1;
                state.likeCount += 1;
                state.writerPress = 1;
            } else if (state.writerPress === 1) {
                state.likeCount -= 1;
                state.writerPress = 0;
            } else if (state.writerPress === 0) {
                state.likeCount += 1;
                state.writerPress = 1;
            } else {
                console.log('unknown')
            }
            setComment(state)
            return {...state}
        }
        case CASE_DISLIKE: {
            if (state.writerPress === -1) {
                state.dislikeCount -= 1;
                state.writerPress = 0;
            } else if (state.writerPress === 1) {
                state.dislikeCount += 1;
                state.likeCount -= 1;
                state.writerPress = -1;
            } else if (state.writerPress === 0) {
                state.dislikeCount += 1;
                state.writerPress = -1;
            } else {
                console.log('unknown comment likeness')
            }
            setComment(state)
            return {...state}
        }
    }
}

const Comment = ({item}) => {
    // like, dislike 버튼 액션 처리
    const [state, dispatch] = React.useReducer(reducer, item)

    return (
        <HorizontalMarginedContainer style={styles.main}>
            <Icon name='userIcon'><View style={styles.userIcon}/></Icon>
            <View style={styles.textArea}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{state.writer.name}</Text>
                    <Text style={styles.headerText}>{state.writerAnswer}</Text>
                </View>
                <View style={styles.body}>
                    <TextWrapper text={state.text}></TextWrapper>
                </View>
                <View style={styles.footer}>
                    <Icon name='like' onPressCallback={() => dispatch({type: CASE_LIKE})}>
                        <ThumbIcon
                            count={state.likeCount}
                            style={state.writerPress === 1 ? styles.thumbIconActive : styles.thumbIconInactive}
                        />
                    </Icon>
                    <Icon name='dislike' onPressCallback={() => dispatch({type: CASE_DISLIKE})}>
                        <ThumbIcon
                            count={state.dislikeCount}
                            style={state.writerPress === -1 ? styles.thumbIconActive : styles.thumbIconInactive}
                        />
                    </Icon>
                </View>
            </View>
        </HorizontalMarginedContainer>
    )
};

const styles = StyleSheet.create(
    {
        main: {
            flexDirection: "row",
            flex: 1,
            backgroundColor: generateRandomColor()
        },
        userIcon: {
            width: 40,
            height: 40,
            backgroundColor: generateRandomColor()
        },
        textArea: {
            flex: 1,
            flexDirection: "column",
            backgroundColor: generateRandomColor()
        },
        header: {
            flexDirection: "row",
            height: 20,
            backgroundColor: generateRandomColor()
        },
        headerText: {
            marginRight: 5,
            backgroundColor: generateRandomColor()
        },
        body: {
            flex: 1,
            backgroundColor: generateRandomColor()
        },
        footer: {
            flexDirection: "row",
            height: 20,
            backgroundColor: generateRandomColor()
        },
        thumbIconActive: {
            backgroundColor: generateRandomColor()
        },
        thumbIconInactive: {
            backgroundColor: generateRandomColor()
        }
    }
);

export default Comment;
