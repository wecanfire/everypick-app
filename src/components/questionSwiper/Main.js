import React from 'react';
import {Text, View, StyleSheet, TextComponent, Vibration} from 'react-native';
import {StatusBar, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
import PagerView from 'react-native-pager-view';

import QuestionMain from '../questionPage/Main';
import CommentList from '../commentPage/Main';
import questions from "../../assets/question_data.json";


const Main = () => {
    // 임시 데이터 여기서 받아올 것
    const [questions, setQuestions] = React.useState(require('../../assets/question_data.json'));
    const commentsBundles = require('../../assets/comment_data.json');

    // ref 생성
    const bottomSheetModalRef = React.useRef()

    const que = {
        uuid: "1",
        writer: "taejin.kim",
        create_date: "2021-04-25 05:05:05.55555",
        update_date: "2021-04-25 05:05:05.55555",
        question: "question 3",
        hashtags: [
            "tag1"
        ],
        answers: [
            {
                answer: "어쩔티비",
                count: "1245"
            },
            {
                answer: "저쩔티비",
                count: "1300"
            }
        ],
        like_count: 32,
        comment_count: 43,
        share_count: 23
    }

    // comment 컴포넌트에서 state setter 취득
    var commentSetter;
    const onCommentMount = (setter) => {
        commentSetter = setter
    }

    // 페이지 전환시 컬백
    const onPageSelected = (e) => {
        // 마지막 질문 도달시 z
        let pos = e.nativeEvent.position
        if (pos === questions.length - 1) {
            setQuestions([...questions, {...que, question: `question ${pos}`}])
        }
    }

    return (
        <View style={{flex: 1}}>
            <PagerView
                style={{flex: 1}}
                initialPage={0}
                orientation={"vertical"}
                onPageSelected={onPageSelected}
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

