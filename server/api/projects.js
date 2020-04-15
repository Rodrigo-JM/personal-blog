const router = require("express").Router();
const Project = require("../db/project");

router.get("/", async (req, res, next) => {
  try {
    const projects = await Project.findAll();

    res.status(200).send(projects);
  } catch (err) {
    next(err);
  }
});

router.get("/:projectId", async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.projectId);
    
    if (project === null) {
      res.sendStatus(404);
    } else {
      res.status(200).send(project);
    }
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const project = await Project.create(req.body);

    if (project === null) {
      res.sendStatus(500);
    } else {
      res.status(201).send(project);
    }
  } catch (err) {
    next(err);
  }
});

router.put("/:projectId", async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.projectId);

    if (project === null) {
      res.sendStatus(404);
    } else {
      await project.update(req.body);
      res.status(200).send(project);
    }
  } catch (err) {
    next(err);
  }
});

router.delete("/:projectId", async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.projectId);

    if (project === null) {
      res.sendStatus(404);
    } else {
      await project.delete();
      res.status(200).send(project);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
