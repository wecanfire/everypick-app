import React from 'react';
import {Text, View, StyleSheet, TextComponent, Vibration} from 'react-native';
import {StatusBar, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
import {gestureHandlerRootHOC} from "react-native-gesture-handler";

import QuestionMain from '../questionPage/Main';
import CommentList from '../commentPage/Main';
import questions from "../../assets/question_data.json";

// {/*// /!*<Swiper*!/*/}
// {/*// /!*  style={styles.swiper}*!/*/}
// {/*// /!*  horizontal={false}*!/*/}
// {/*// /!*  showsButtons={true}*!/*/}
// {/*// /!*  onIndexChanged={onIndexChangedHandle}*!/*/}
// {/*// /!*  >*!/*/}
// {/*// /!*{questions.map((question, i) => (*!/*/}
// {/*// /!*  <View style={{flex: 1}}>*!/*/}
// {/*// /!*    <QuestionMain style={styles.main}*!/*/}
// {/*// /!*      bottomSheetModalRef={bottomSheetModalRef}*!/*/}
// {/*// /!*      questionData={question}>*!/*/}
// {/*// /!*    </QuestionMain>*!/*/}
// {/*// /!*  </View>*!/*/}
// {/*// /!*))}*!/*/}
// {/*//*/}
// {/*// /!*</Swiper>*!/*/}
// {/*// /!*<CommentMain bottomSheetModalRef={bottomSheetModalRef} commentsData={commentsData} />*!/*/}
//


const Main = () => {
    // 임시 데이터 여기서 받아올 것
    const questions = require('../../assets/question_data.json');
    const commentsBundles = require('../../assets/comment_data.json');

    // Modal 은 Swiper 밖에 있음.
    const bottomSheetModalRef = React.useRef()

    // comment 컴포넌트에서 state setter 취득
    var commentSetter;
    const onCommentMount = (setter) => {
        commentSetter = setter
    }
    // Swipe 시 인덱스 반환하면 callback. 이를 이용해 commentsData 를 업데이트 한다
    const onIndexChangedHandle = (index) => {
        if (commentSetter !== 'undefined') {
            commentSetter(commentsBundles[index])
        }
    }

    return (
        <View style={{flex: 1}}>
            <Swiper
                horizontal={false}
                onIndexChanged={onIndexChangedHandle}
            >
                {questions.map((question, i) => (
                    <View
                        style={{flex: 1}}
                        key={i}
                    >
                        <QuestionMain
                            style={styles.main}
                            bottomSheetModalRef={bottomSheetModalRef}
                            questionData={question}
                        >
                        </QuestionMain>
                    </View>
                ))}
            </Swiper>
            <CommentList
                bottomSheetModalRef={bottomSheetModalRef}
                firstCommentBundle={commentsBundles[0]}
                onMount={onCommentMount}
            />
        </View>
    );
}

const styles = StyleSheet.create(
    {
        swiper: {
            height: 100,
            backgroundColor: 'yellow'
        },
        main: {
            flex: 1
        }
    }
)

export default Main;

