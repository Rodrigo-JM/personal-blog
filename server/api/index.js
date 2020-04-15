const router = require('express').Router();
const postsRouter = require('./posts')
const biosRouter = require('./bios')
const projectsRouter = require('./projects')

router.use('/posts', postsRouter)
router.use('/bios', biosRouter)
router.use('/projects', projectsRouter)

router.use(function (req, res, next) {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
  });
  
  module.exports = router