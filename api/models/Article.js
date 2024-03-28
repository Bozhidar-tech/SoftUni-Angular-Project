import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    tags: {
        type: [String]
    },
    comments: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
    }
});

const Article = mongoose.model('Article', ArticleSchema);

export default Article;
