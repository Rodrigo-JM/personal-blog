const router = require('express').Router();
const postsRouter = require('./posts')

router.use('/posts', postsRouter)

router.use(function (req, res, next) {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
  });
  
  module.exports = router