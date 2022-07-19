import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PagerView from 'react-native-pager-view';

import QuestionMain from '../questionPage/Main';
import CommentList from '../commentPage/CommentList';
import QuestionList from "../obj/QuestionListClass";


const QuestionSwiper = () => {
    const [questionList, setQuestionList] = React.useState(new QuestionList());
    const [questionComments, setQuestionComments] = React.useState({});

    React.useEffect(() => {
        // 초기 데이터 로드
        questionList.addNewQuestions()
        setQuestionList(questionList.copy())
        setQuestionComments(questionList.getCommentsOfIndex(0))
    }, []);

    // refs
    const bottomSheetModalRef = React.useRef();
    const pageViewRef = React.useRef();
    const r = React.useRef();

    // 페이지 전환시 콜백
    const onPageSelected = (e) => {
        let pos = e.nativeEvent.position
        // 댓글 변경
        setQuestionComments(questionList.getCommentsOfIndex(pos))
        // 마지막 질문 도달시 새 질문 로드
        if (pos === questionList.length - 1) {
            let numRemove = (questionList.length + QUESTIONS_LOAD_SIZE) - QUESTIONS_QUEUE_SIZE
            if (0 <= numRemove) {
                // queue 다 찼을 때 오래된 질문 덜어내야 함
                questionList.removeOldQuestions()
            }
            // 새 질문 그대로 더하기
            questionList.addNewQuestions()
            setQuestionList(questionList.copy())
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
                {questionList.questions.map((question, i) => (
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
                questionComments={questionComments}
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

export default QuestionSwiper;

