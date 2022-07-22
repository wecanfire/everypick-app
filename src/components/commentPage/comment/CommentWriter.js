import React from 'react';
import {Text, View, StyleSheet, TextInput, Keyboard} from 'react-native';
import {generateRandomColor} from '../../utils/Common'
import Icon from '../../utils/icon/Icon'
import ScreenSizeContext from '../../ScreenSizeContext'
import CommentClass from "../../obj/Comment";

const COMMENT_PLACEHOLDER = '댓글 달기...'
const TEXTINPUT_MIN_HEIGHT = 40

const CommentWriter = ({questionComments}) => {
    const [commentText, setCommentText] = React.useState('')
    const [textInputHeight, setTextInputHeight] = React.useState(TEXTINPUT_MIN_HEIGHT)
    const TEXTINPUT_MAX_HEIGHT = React.useContext(ScreenSizeContext).WINDOW_HEIGHT / 5

    // 댓글창 최대 높이 제한
    const constraintMaxHeight = e => {
        setTextInputHeight(Math.min(e.nativeEvent.contentSize.height, TEXTINPUT_MAX_HEIGHT))
        }

    const handleCommentSubmit = (e) => {
        questionComments.addComment(commentText)
        setCommentText('')
        Keyboard.dismiss()
    }

    // renders
    return (
        <View style={styles.main}>
            <View style={styles.leftColumn}>
                <Icon>
                    <View style={styles.userIcon}>
                    </View>
                </Icon>
            </View>
                <TextInput
                    style={[styles.textInput, {height: textInputHeight}]}
                    onChangeText={setCommentText}
                    value={commentText}
                    multiline={true}
                    blurOnSubmit={true}
                    enablesReturnKeyAutomatically={true}
                    placeholder={COMMENT_PLACEHOLDER}
                    onContentSizeChange={constraintMaxHeight}
                    onSubmitEditing={handleCommentSubmit}
                />
            <View style={styles.rightColumn}>
                <Icon
                    name='submitButton'
                    onPressCallback={handleCommentSubmit}
                >
                    <View style={styles.commentButton}>
                    </View>
                </Icon>
            </View>
        </View>
    )
};

const styles = StyleSheet.create(
    {
        main: {
            flexDirection: "row",
            justifyContent: 'space-between',
            padding: 10,
            backgroundColor: generateRandomColor()
        },
        leftColumn: {},
        rightColumn: {
            justifyContent: 'flex-end'
        },
        userIcon: {
            width: 40,
            height: 40,
            backgroundColor: generateRandomColor()
        },
        textInput: {
            // flexGrow: 1,
            flex: 1,
            backgroundColor: generateRandomColor(),
        },
        hiddenComment: {
            position: 'absolute',
            width: 300
        },
        commentButton: {
            width: 40,
            height: 40,
            backgroundColor: generateRandomColor()
        }
    }
);

export default CommentWriter;
