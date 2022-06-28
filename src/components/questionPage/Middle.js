import React from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';

import {generateRandomColor, getMasterMargin} from '../utils/Common';

import HorizontalMarginedContainer from '../utils/HorizontalMarginedContainer'
import UserIcon from './UserIcon'
import Hashtag from '../utils/Hashtag'


const PRESS_START = 'PRESS_START'
const PRESS_MOVE = 'PRESS_MOVE'
const PRESS_RELEASE = 'PRESS_RELEASE'
const PRESS_LONG = 'PRESS_LONG' // long press 판단을 위한 delay 끝의 액션

const STATE_HOLDING = 'STATE_HOLDING' // pressing 하고 있는 상태
const STATE_SWIPING = 'STATE_SWIPING'
const STATE_POLLING = 'STATE_POLLING'
const STATE_OUTSIDE = 'STATE_OUTSIDE'

const PRESS_LONG_THRESHOLD = 800 // milisecond

const AT_LEFT = 'AT_LEFT'
const AT_RIGHT = 'AT_RIGHT'
const AT_BOTTOM = 'AT_BOTTOM'
const AT_OUTSIDE = 'AT_OUTSIDE'

const COLOR_LEFT_HIDDEN = 'rgba(0,0,0,0)'
const COLOR_RIGHT_HIDDEN = 'rgba(0,0,0,0)'
const COLOR_LEFT_IDLE = 'rgba(255,0,0,0.3)'
const COLOR_RIGHT_IDLE = 'rgba(0,255,0,0.3)'
const COLOR_LEFT_HIGHLIGHT = 'rgba(255,0,0,0.7)'
const COLOR_RIGHT_HIGHLIGHT = 'rgba(0,255,0,0.7)'


// 누르고 있는 상태에서 시작한 위치와 현재 위치 사이의 거리 허용 범위
// 거리가 10 이내라면 누르고 있는 상태로 판단
const HOLDING_DIST_THRESHOLD = 10
const DEFAULT_PRESS_ACTION = {state: PRESS_RELEASE, start_pos: {pageX: Infinity, pageY: Infinity}}

/*
<View style={{ flexDirection:'row', flex:1}}>
            <View style={{flex:1, backgroundColor: 'rgba(100,0,0,0.7)'}} />
            <View style={{flex:1, backgroundColor: 'rgba(0,100,0,0.7)'}} />
          </View>
*/

function Middle(props) {
    const username = props.data['writer']
    const question = props.data['question']
    const hashtags = props.data['hashtags']
    // const [selectable, setSelectable] = React.useState(false)
    const [questionBoxSize, setQuestionBoxSize] = React.useState({width: 0, height: 0})
    const [bottomBoxSize, setBottomBoxSize] = React.useState({width: 0, height: 0})
    const [pollingColors, setPollingColors] = React.useState({left: COLOR_LEFT_HIDDEN, right: COLOR_RIGHT_HIDDEN})
    // const [pressStartTime, setPressStartTime] = React.useState(Infinity)
    // const [isPressing, setIsPressing] = React.useState(false)
    // const [pressState, setPressState] = React.useState('')
    const selectable = false


    const findWhereAt = event => {
        const {locationX, locationY, pageX, pageY} = event.nativeEvent

        if (0 < locationY) {
            // 커서는 안쪽에
            if (locationY < questionBoxSize.height) {
                if (locationX < questionBoxSize.width / 2) {
                    // 커서는 왼쪽에
                    // console.log('left')
                    return AT_LEFT
                } else {
                    // 커서는 오른쪽에
                    // console.log('right')
                    return AT_RIGHT
                }
            } else {
                // 커서는 아래에
                // console.log('bottom')
                return AT_BOTTOM
            }
        } else {
            // console.log('else polling')
            return AT_OUTSIDE
        }
    }

    // 임시선택 하이라이트
    const hightlightPolling = event => {
        const at = findWhereAt(event)
        if (at == AT_LEFT) {
            setPollingColors({left: COLOR_LEFT_HIGHLIGHT, right: COLOR_RIGHT_IDLE})
        } else if (at == AT_RIGHT) {
            setPollingColors({left: COLOR_LEFT_IDLE, right: COLOR_RIGHT_HIGHLIGHT})
        } else {
            setPollingColors({left: COLOR_LEFT_IDLE, right: COLOR_RIGHT_IDLE})
        }
    }


    const resetPollingColor = () => {
        setPollingColors({left: COLOR_LEFT_HIDDEN, right: COLOR_RIGHT_HIDDEN})
    }

    const handlePolling = event => {
        const at = findWhereAt(event)
        if (at == AT_LEFT) {
            console.log('polling left')
        } else if (at == AT_RIGHT) {
            console.log('polling right')
        } else {
            console.log('no polling')
        }
        resetPollingColor()
    }

    // 1. press 시작 시 pos 기록, long press count 시작
    // 2. move 시 press 시작 위치와 특정 거리 안이라면 pre poll state 상태 지속
    // 3. 벗어나면 pre poll state 상태 종료, horizontal swipe 상태로 전환
    // 4. long press callback 실행시 아직 pre poll state 라면 poll state 로 전환
    // 5. poll state 진입시 터치 종료시 까지 유지
    const reducer = (state, action) => {
        switch (action.type) {
            case PRESS_START: {
                console.log('press start')
                const {pageX, pageY} = action.event.nativeEvent
                const newState = {start_pos: {pageX: pageX, pageY: pageY}, event: action.event}
                const at = findWhereAt(action.event)
                if (at == AT_OUTSIDE) {
                    return {...newState, state: STATE_OUTSIDE}
                } else {
                    return {...newState, state: STATE_HOLDING}
                }
            }
            case PRESS_MOVE: {
                // console.log('press move')
                // event 업데이트된 기본
                const newState = {...state, event: action.event}
                const {pageX, pageY} = action.event.nativeEvent
                const dist = Math.sqrt((pageX - state.start_pos.pageX) ** 2 + (pageY - state.start_pos.pageY))
                if (state.state == STATE_HOLDING) {
                    if (dist < HOLDING_DIST_THRESHOLD) {
                        // console.log('holding')
                        return newState
                    } else {
                        // console.log('swiping')
                        return {...newState, state: STATE_SWIPING}
                    }
                } else if (state.state == STATE_POLLING) {
                    // console.log('polling')
                    hightlightPolling(action.event)
                    return newState
                } else {
                    console.log(`unknown moving state: ${state.state}`)
                    return newState
                }
            }
            case PRESS_LONG: {
                if (state.state == STATE_HOLDING) {
                    hightlightPolling(action.event)
                    return {state: STATE_POLLING, start_pos: state.start_pos, event: action.event}
                } else {
                    return {...DEFAULT_PRESS_ACTION}
                }
            }
            case PRESS_RELEASE: {
                if (state.state == STATE_POLLING) {
                    // polling 복잡하니 따로 처리
                    handlePolling(action.event)
                }
                console.log('release')
                resetPollingColor()
                return {...DEFAULT_PRESS_ACTION}
            }
        }

    }
    const [state, dispatch] = React.useReducer(reducer, DEFAULT_PRESS_ACTION)

    const updateQuestionBoxSize = e => {
        const {width, height} = e.nativeEvent.layout
        setQuestionBoxSize({width: width, height: height})
    }

    const updateBottomSize = e => {
        const {width, height} = e.nativeEvent.layout
        setBottomBoxSize({width: width, height: height})
    }

    // 터치 시작
    const onResponderGrant = e => {
        dispatch({type: PRESS_START, event: e})
        // long press 감지용
        setTimeout(() => {
            dispatch({type: PRESS_LONG, event: e})
        }, PRESS_LONG_THRESHOLD)
    }

    const onStartShouldSetResponder = e => {
        return true
    }

    const onMoveShouldSetResponder = e => {
        return true
    }
    // <HorizontalMarginedContainer
    //     style={[styles.main, props.style]}
    // >
    //   <View style={styles.userIconBar}>
    //     <UserIcon username={username}></UserIcon>
    //   </View>
    //   <View
    //       style={{flex:1}}
    //       onStartShouldSetResponder={e => true}
    //       onMoveShouldSetResponder={e => true}
    //       onResponderGrant={onResponderGrant}
    //       onResponderMove={e => dispatch({type: PRESS_MOVE, event: e})}
    //       onResponderRelease={e => dispatch({type: PRESS_RELEASE, event: e})}
    //       onResponderTerminate={e => {
    //         console.log('terminate')
    //         dispatch({type: PRESS_RELEASE, event: e})
    //       }
    //       }
    //
    //   >
    //     <View
    //         style={styles.questionBox}
    //         onLayout={updateQuestionBoxSize}
    //     >
    //       <Text
    //           style={styles.question} onStartShouldSetResponder={e => false} onMoveShouldSetResponder={e => false}
    //           selectable={true}
    //       >
    //         {question}
    //       </Text>
    //       <View style={styles.hashtagRows}>
    //         {hashtags.map((hashtag, i) => (
    //             <Hashtag tag={hashtag} style={styles.hashtag} selectable={true} onStartShouldSetResponder={e => false} onMoveShouldSetResponder={e => false} />
    //         ))}
    //       </View>
    //     </View>
    //     <View
    //         style={styles.whitespaceBar}
    //         onLayout={updateBottomSize}
    //     />
    //     <View style={{ position: 'absolute', flexDirection: 'column', width: questionBoxSize.width, height: questionBoxSize.height }}>
    //       <View style={{ flexDirection:'row', flex:1}}>
    //         <View style={{flex:1, backgroundColor: pollingColors.left}} />
    //         <View style={{flex:1, backgroundColor: pollingColors.right}} />
    //       </View>
    //     </View>
    //
    //   </View>
    // </HorizontalMarginedContainer>
    return (
        <HorizontalMarginedContainer
            style={[styles.main, props.style]}
        >
            <View style={styles.userIconBar}>
                <UserIcon username={username}></UserIcon>
            </View>
            <View
                style={{flex: 1}}
            >
                <View
                    style={styles.questionBox}
                    onLayout={updateQuestionBoxSize}
                >
                    <Text
                        style={styles.question}
                        selectable={true}
                    >
                        {question}
                    </Text>
                    <View style={styles.hashtagRows}>
                        {hashtags.map((hashtag, i) => (
                            <Hashtag
                                tag={hashtag}
                                style={styles.hashtag}
                                selectable={true}
                                key={i}
                            />
                        ))}
                    </View>
                </View>
                <View
                    style={styles.whitespaceBar}
                    onLayout={updateBottomSize}
                />
                <View style={{
                    position: 'absolute',
                    flexDirection: 'column',
                    width: questionBoxSize.width,
                    height: questionBoxSize.height
                }}>
                    <View style={{flexDirection: 'row', flex: 1}}>
                        <View style={{flex: 1, backgroundColor: pollingColors.left}}/>
                        <View style={{flex: 1, backgroundColor: pollingColors.right}}/>
                    </View>
                </View>
            </View>
        </HorizontalMarginedContainer>
    );
}

const styles = StyleSheet.create(
    {
        main: {},
        userIconBar: {
            flexDirection: 'row',
            alignItems: 'center',
            height: 60,
            backgroundColor: generateRandomColor()
        },
        questionBox: {
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 80,
            marginLeft: 15,
            backgroundColor: generateRandomColor()
        },
        question: {
            fontSize: 32,
            backgroundColor: generateRandomColor()
        },
        hashtagRows: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            backgroundColor: generateRandomColor()
        },
        whitespaceBar: {
            flex: 20,
            backgroundColor: generateRandomColor()
        },
        hashtag: {
            marginHorizontal: 5
        }
    }
)

export default Middle;
