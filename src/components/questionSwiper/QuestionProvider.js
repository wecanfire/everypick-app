import Question from "./Question";

let INDEX = 1;

const loadQuestions = (previousQuestions, numGet) => {
    // 다음 질문 질의에 필요한 데이터 추출 후 API 서버 이용할 것
    const last = previousQuestions.slice(-5)

    return getGarbageQuestions(previousQuestions, numGet)
}

const getGarbageQuestions = (previousQuestions, numLoad) => {
    // 테스트용 가비지 생성기
    // 필요시에 더 고도화 할 것
    return Array.from({length: numLoad}, () => {
        // const uuid = Math.floor(Math.random() * 1024) + 1;
        const uuid = INDEX++;
        const create_date = null // 날짜 시간 표현으로 바꿀 것
        const text = `question ${uuid}` // 특정 길이 제약을 받는, 단어 집합으로 변경할 것
        const question = new Question({
            uuid: uuid,
            writer: 'some.one',
            create_date: create_date,
            text: text,
            hashtags: ['a', 'b', 'c'],
            like_count: 0,
            share_count: 0
        })
        question.addAnswer({text:'answer1', count:3});
        question.addAnswer({text:'answer2', count:2});
        return question
    });
}

export default loadQuestions;
