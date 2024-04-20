let router = require('express').Router();
let userController = require('../controllers/UserController');
let postController = require('../controllers/PostController');

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to BooksExchange!',
    });
});

router.route('/users')
    .post(userController.signIn)

router.route('/posts')
    .get(postController.getPosts)
    .post(postController.createPost)

router.route('/users/:owner/posts')
    .get(postController.getMyPosts)

router.route('/posts/:id')
    .delete(postController.deletePost)
    .put(postController.updatePost)

module.exports = router;