class Question {
    constructor({uuid,
                writer,
                createDate,
                text,
                hashtags,
                like_count,
                shareCount}) {
        this.uuid = uuid
        this.writer = writer
        this.createDate = createDate
        this.text = text
        this.hashtags = hashtags
        this.likeCount = like_count
        this.shareCount = shareCount
        this.answers = []
    }

    addAnswer({text, count}) {
        this.answers.push({text:text, count:count})
    }
}

export default Question