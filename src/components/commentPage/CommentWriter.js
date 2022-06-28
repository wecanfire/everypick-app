import React from 'react';
import { Text, View, StyleSheet, Button, TouchableHighlight, TextInput } from 'react-native';
import {generateRandomColor} from '../utils/Common'
import Icon from '../utils/icon/Icon'
import IconAnnotated from '../utils/icon/IconAnnotated'
import ScreenSizeContext from '../ScreenSizeContext'

/*
<TouchableHighlight style={styles.commentBoxIcon} underlayColor='white' onPress={() => console.log('ddd')}>
  <View style={styles.commentBox}>
    <Text style={styles.comment}>{comment}</Text>
  </View>
</TouchableHighlight>
*/

const TEXT_LENGTH_MAX = 70
const COMMENT_PLACEHOLDER = '댓글 달기...'
const TEXTINPUT_MIN_HEIGHT = 40

const CommentWriter = ({comments, setComments}) => {
  const [comment, setComment] = React.useState('')
  const [textInputHeight, setTextInputHeight] = React.useState(TEXTINPUT_MIN_HEIGHT)
  const [textInputWidth, setTextInputWidth] = React.useState()
  const TEXTINPUT_MAX_HEIGHT = React.useContext(ScreenSizeContext).WINDOW_HEIGHT / 5

  const handleTextInputWidth = React.useCallback(
    e => setTextInputWidth(e.nativeEvent.layout.width), [])

  const handleSizeChange = React.useCallback(
    e => setTextInputHeight(Math.min(e.nativeEvent.layout.height, TEXTINPUT_MAX_HEIGHT)), [TEXTINPUT_MAX_HEIGHT])
  
  const handleCommentSubmit = (e) => {
    console.log(comments)
    const newComment={
      "uuid": comments.length,
        "writer": {
          "user_icon": "",
          "uid": "",
          "name": "comment.writer",
          "answer": "writer's answer"
        },
        "create_date": "written date",
        "text": comment,
        "like_count": 0,
        "dislike_count": 0,
        "subcomments": []
    }
    setComments([newComment, ...comments])
    setComment('')
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
      <View
        style={{flexGrow:1}}
        >
        <TextInput
          style={[styles.textInput, {height: textInputHeight}]}
          onChangeText={setComment}
          value={comment}
          multiline={true}
          blurOnSubmit={true}
          enablesReturnKeyAutomatically={true}
          placeholder={COMMENT_PLACEHOLDER}
          onLayout={handleTextInputWidth}
          />
        <Text
          style={[styles.hiddenComment, {width: textInputWidth}]}
          onLayout={handleSizeChange}>
          {comment}
        </Text>
      </View>
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
    leftColumn: {

    },
    rightColumn: {
      justifyContent: 'flex-end'
    },
    userIcon: {
      width: 40,
      height: 40,
      backgroundColor: generateRandomColor()
    },
    textInput: {
      flexGrow: 1,
      backgroundColor: generateRandomColor()
    },
    hiddenComment: {
      position: 'absolute',
      opacity: 0,
    },
    commentButton: {
      width: 40,
      height: 40,
      backgroundColor: generateRandomColor()
    }
  }
);

export default CommentWriter;
