import React from 'react';
import {Text, View, StyleSheet, TextComponent, Vibration} from 'react-native';
import {StatusBar, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
import PagerView from 'react-native-pager-view';

import QuestionMain from '../questionPage/Main';
import CommentList from '../commentPage/Main';
import questions from "../../assets/question_data.json";
import loadQuestions from "./QuestionProvider";
import question from "./Question";
import commentsBundles from "../../assets/comment_data.json";
import {setWarningFilter} from "react-native/Libraries/LogBox/Data/LogBoxData";

let PREVIOUSQUESTIONS = []
const Main = () => {
    const [questions, setQuestions] = React.useState([]);
    const [toIndex, setToIndex] = React.useState(0);
    React.useEffect(() => {
        // 초기 데이터 로드
        setQuestions(loadQuestions(PREVIOUSQUESTIONS, QUESTIONS_LOAD_SIZE_INITIAL))
    }, []);

    const commentsBundles = require('../../assets/comment_data.json');
    const bottomSheetModalRef = React.useRef();
    const pageViewRef = React.useRef();
    // comment 컴포넌트에서 state setter 취득
    var commentSetter;
    const onCommentMount = (setter) => {
        commentSetter = setter
    }

    // 페이지 전환시 콜백
    const onPageSelected = (e) => {
        let pos = e.nativeEvent.position
        // 마지막 질문 도달시 새 질문 로드
        if (pos === questions.length - 1) {
            let numRemove = (questions.length + QUESTIONS_LOAD_SIZE) - QUESTIONS_QUEUE_SIZE
            let loaded = loadQuestions(questions, QUESTIONS_LOAD_SIZE)
            if (0 <= numRemove) {
                // queue 다 찼을 때 오래된 질문 덜어내야 함
                setQuestions([...questions.splice(numRemove), ...loaded])
            } else {
                // 새 질문 그대로 더하기
                setQuestions([...questions, ...loaded])
            }
        }
    }

    return (
        <View style={{flex: 1}}>
            <PagerView
                ref={pageViewRef}
                style={{flex: 1}}
                initialPage={0}
                orientation={"vertical"}
                onPageSelected={onPageSelected}
            >
                {questions.map((question, i) => (
                    <View
                        style={{flex: 1}}
                        key={question.uuid}
                    >
                        <QuestionMain
                            style={styles.main}
                            bottomSheetModalRef={bottomSheetModalRef}
                            questionData={question}
                        >
                        </QuestionMain>
                    </View>
                ))}
            </PagerView>
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

