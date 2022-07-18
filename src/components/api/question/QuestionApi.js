import getGarbageQuestions from "./GarbageGenerator";

const getQuestions = existingQuestions => {
    // 다음 질문 질의에 필요한 데이터 추출 후 API 서버 이용할 것
    const last = existingQuestions.slice(-5)

    return getGarbageQuestions(existingQuestions)
}

export default getQuestions;
