import React from 'react';
import {Text, View, StyleSheet, TextComponent, Vibration} from 'react-native';
import {StatusBar, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';

import QuestionMain from '../questionPage/Main';
import CommentMain from '../commentPage/Main';

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
    const commentss = require('../../assets/comment_data.json');

    // Modal 은 Swiper 밖에 있음.
    const bottomSheetModalRef = React.useRef()
    console.log('bottom sheet')
    console.log(bottomSheetModalRef)
    // 페이지가 넘어갔을 때 comment 객체가 달라지고 이를 통해 Comment 컴포넌트를 리랜더링해야함
    const [commentsData, setCommentsData] = React.useState(commentss[0])
    // Swipe 시 인덱스 반환하면 callback. 이를 이용해 commentsData 를 업데이트 한다
    const onIndexChangedHandle = (index) => {
        setCommentsData(commentss[index])
    }

    return (
        <View style={{flex: 1}}>
            <Swiper
                horizontal={false}
            >
                {questions.map((question, i) => (
                    <View
                        style={{flex: 1}}
                        key={i}
                    >
                        <QuestionMain style={styles.main}
                                      bottomSheetModalRef={bottomSheetModalRef}
                                      questionData={question}
                        >
                        </QuestionMain>
                    </View>
                ))}
            </Swiper>
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

