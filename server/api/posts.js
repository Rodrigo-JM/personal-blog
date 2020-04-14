const router = require("express").Router();
const Post = require("../db/post");

router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.findAll();

    res.status(200).send(posts);
  } catch (err) {
    next(err);
  }
});

router.get("/:postId", async (req, res, next) => {
  try {
    const post = await Post.findByPk(req.params.postId);
    
    if (post === null) {
      res.sendStatus(404);
    } else {
      res.status(200).send(post);
    }
    res.status(200).send(posts);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const post = await Post.create(req.body);

    if (post === null) {
      res.sendStatus(500);
    } else {
      res.status(201).send(post);
    }
  } catch (err) {
    next(err);
  }
});

router.put("/:postId", async (req, res, next) => {
  try {
    const post = await Post.findByPk(req.params.postId);

    if (post === null) {
      res.sendStatus(404);
    } else {
      await post.update(req.body);
      res.status(200).send(post);
    }
  } catch (err) {
    next(err);
  }
});

router.delete("/:postId", async (req, res, next) => {
  try {
    const post = await Post.findByPk(req.params.postId);

    if (post === null) {
      res.sendStatus(404);
    } else {
      await post.delete();
      res.status(200).send(post);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
