import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import HorizontalMarginedContainer from '../utils/HorizontalMarginedContainer'
import {generateRandomColor} from '../utils/Common'
import Icon from '../utils/icon/Icon'
import IconAnnotated from '../utils/icon/IconAnnotated'
/*

*/

const TEXT_LENGTH_MAX = 70


const Comment = ({item}) => {
  const text = item.text

  // 초기 텍스트 길이에 따른 편집
  const isTextLong = TEXT_LENGTH_MAX < text.length
  var textSliced = text
  if (isTextLong) {
    textSliced = text.slice(0, TEXT_LENGTH_MAX) + '...'
  }

  // 더보기 버튼 클릭에 따른 text 변경을 위한 state 저장
  const [textRender, setTextRender] = React.useState(textSliced)
  const [isPressed, setIsPressed] = React.useState(false)
  
  // 더보기 버튼 컴포넌트, 클릭시 callback 을 통해 state 값들 바꿈
  const ShowMoreButton = React.useCallback(() => (
    isTextLong && !isPressed ? (
      <Icon name='자세히 보기' onPressCallback={() => {
          setTextRender(text);
          setIsPressed(true);
        }}>
        <Text>자세히 보기</Text>
      </Icon>
    ) : null
  ), [item, isPressed])
  
  // 텍스트와 더보기 버튼 컴포넌트
  const TextWrapper = React.useCallback(() => {
    return <Text>{textRender}{ShowMoreButton()}</Text>
  }, [item, textRender])

  // thumb 버튼 클릭에 따른 count 변경을 위한 state 저장
  const [likeCount, setLikeCount] = React.useState(item.like_count)
  const [likePressed, setLikePressed] = React.useState(false)
  const [dislikeCount, setDislikeCount] = React.useState(item.dislike_count)
  const [dislikePressed, setDislikePressed] = React.useState(false)
  const [likeStyle, setLikeStyle] = React.useState(styles.thumbIconInactive)
  const [dislikeStyle, setDislikeStyle] = React.useState(styles.thumbIconInactive)

  // thumb 버튼 클릭에 따른 액션
  const likePressHandler = React.useCallback(() => {
    if (likePressed) {
      setLikePressed(false)
      setLikeCount(likeCount - 1)
      setLikeStyle(styles.thumbIconInactive)
    } else {
      if (dislikePressed) {
        setDislikePressed(false)
        setDislikeCount(dislikeCount - 1)
        setDislikeStyle(styles.thumbIconInactive)
      }
      setLikePressed(true)
      setLikeCount(likeCount + 1)
      setLikeStyle(styles.thumbIconActive)
    }
  }, [likePressed, dislikePressed])
  const dislikePressHandler = React.useCallback(() => {
    if (dislikePressed) {
      setDislikePressed(false)
      setDislikeCount(dislikeCount - 1)
      setDislikeStyle(styles.thumbIconInactive)
    } else {
      if (likePressed) {
        setLikePressed(false)
        setLikeCount(likeCount - 1)
        setLikeStyle(styles.thumbIconInactive)
      }
      setDislikePressed(true)
      setDislikeCount(dislikeCount + 1)
      setDislikeStyle(styles.thumbIconActive)
    }
  }, [likePressed, dislikePressed])
  
  //
  const ThumbIcon = (count, style) => (
    <View style={styles.thumbArea}>
      <View style={[styles.thumbIcon, style]} />
      <Text>{count}</Text>
    </View>
  )

  // renders
  return (
    <HorizontalMarginedContainer style={styles.main}>
      <Icon name='userIcon'><View style={styles.userIcon} /></Icon>
      <View style={styles.textArea}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{item.writer.name}</Text>
          <Text style={styles.headerText}>{item.writer.answer}</Text>
        </View>
        <View style={styles.body}>
          <Text>{TextWrapper()}</Text>
        </View>
        <View style={styles.footer}>
          <Icon name='like' onPressCallback={likePressHandler}>
            {ThumbIcon(likeCount, likeStyle)}
          </Icon>
          <Icon name='dislike' onPressCallback={dislikePressHandler}>
            {ThumbIcon(dislikeCount, dislikeStyle)}
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
    thumbArea: {
      width: 60,
      flexDirection: 'row',
    },
    thumbIcon: {
      width: 20,
      height: 20,
      marginRight: 5,
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
