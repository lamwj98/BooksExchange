// Import user model
Post = require('../models/PostModel');

exports.createPost = async function (req, res) {
    try {
        let post = new Post();
        post.bookName = req.body.bookName;
        post.description = req.body.description;
        post.owner = req.body.owner;

        await post.save();
        res.status(201).send("Post created successfully");
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).send("Post creation failed");
    }
}

exports.getPosts = async function (req, res) {
    try {
        let posts = await Post.find();
        res.status(200).send(posts);
    } catch (error) {
        console.error('Error getting posts:', error);
        res.status(500).send("Error getting posts");
    }
}

exports.getMyPosts = async function (req, res) {
    try {
        let posts = await Post.find({ owner: req.params.owner });
        res.status(200).send(posts);
    } catch (error) {
        console.error('Error getting posts:', error);
        res.status(500).send("Error getting posts");
    }
}

exports.deletePost = async function (req, res) {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);

        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }

        res.status(204).end();
    } catch (error) {
        console.error('Error deleting post:', error);
        res.status(500).send("Error deleting post");
    }
}

exports.updatePost = async function (req, res) {
    try {
        console.log(req.body);
        await Post.findByIdAndUpdate(req.params.id, req.body)

        res.status(204).end();
    } catch (error) {
        console.error('Error updating post:', error);
        res.status(500).send("Error updating post");
    }
}