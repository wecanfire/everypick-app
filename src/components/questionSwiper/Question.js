class Question {
    constructor({uuid,
                writer,
                create_date,
                text,
                hashtags,
                like_count,
                comment_count,
                share_count}) {
        this.uuid = uuid
        this.writer = writer
        this.create_date = create_date
        this.text = text
        this.hashtags = hashtags
        this.like_count = like_count
        this.share_count = share_count
        this.answers = []
    }

    addAnswer({text, count}) {
        this.answers.push({text:text, count:count})
    }
}

export default Question