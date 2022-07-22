class Comment {
    constructor({uuid,
                writer,
                writerAnswer,
                writerPress,
                createDate,
                text,
                likeCount,
                dislikeCount}) {
        this.uuid = uuid
        this.createDate = createDate
        this.text = text
        this.likeCount = likeCount
        this.dislikeCount = dislikeCount
        this.writer = writer
        this.writerAnswer = writerAnswer
        this.writerPress = writerPress
    }
}

export default Comment