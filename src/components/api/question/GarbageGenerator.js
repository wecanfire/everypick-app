import QuestionClass from "../../obj/QuestionClass";

let INDEX = 1;

const getGarbageQuestions = (previousQuestions) => {
    // 테스트용 가비지 생성기
    // 필요시 더 고도화 할 것
    return Array.from({length: QUESTIONS_LOAD_SIZE}, () => {
        // const uuid = Math.floor(Math.random() * 1024) + 1;
        const uuid = INDEX++;
        const createDate = null // 날짜 시간 표현으로 바꿀 것
        const text = `question ${uuid}` // 특정 길이 제약을 받는, 단어 집합으로 변경할 것
        const question = new QuestionClass({
            uuid: uuid,
            writer: 'some.one',
            createDate: createDate,
            text: text,
            hashtags: ['a', 'b', 'c'],
            likeCount: 0,
            shareCount: 0
        })
        question.addAnswer({text:'answer1', count:3});
        question.addAnswer({text:'answer2', count:2});
        return question
    });
}

export default getGarbageQuestions;
