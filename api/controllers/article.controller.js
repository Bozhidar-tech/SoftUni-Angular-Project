import Article from '../models/Article.js';

export const getAllArticles = async (req, res) => {
    try {
        const articles = await Article.find().populate('author').sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            message: "All articles fetched successfully!",
            data: articles
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch articles!",
            error: error.message
        });
    }
};

export const getArticleById = async (req, res) => {
    try {
        const { id } = req.params;
        const article = await Article.findById(id);
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createArticle = async (req, res, next) => {
    try {
        if (!req.user) {
            return next(CreateError(401, "You are not authenticated!"));
        }

        const { title, content, tags } = req.body;
        const userId = req.user.id;
        console.log(req.user);

        const article = new Article({
            title,
            content,
            author: userId,
            tags
        });

        const result = await article.save();

        res.status(201).json({
            success: true,
            message: "Article created successfully!",
            data: {
                ...article.toObject(),
                _id: result._id.toHexString()
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create article!",
            error: error.message
        });
    }
};

export const updateArticleById = async (req, res) => {
    try {
        const { id } = req.params;
        const article = await Article.findByIdAndUpdate(id, req.body, { new: true });
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.json(article);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteArticleById = async (req, res) => {
    try {
        const deletedArticle = await Article.findOneAndDelete({
            _id: req.params.id
        });

        if (!deletedArticle) {
            return res.status(404).json({
                success: false,
                message: "Article not found!"
            });
        }

        res.status(200).json({
            success: true,
            message: "Article deleted successfully!",
            data: deletedArticle
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete article!",
            error: error.message
        });
    }
};
