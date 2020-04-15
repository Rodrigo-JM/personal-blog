const router = require("express").Router();
const Bio = require("../db/bio");

router.get("/", async (req, res, next) => {
  try {
    const bios = await Bio.findAll();

    res.status(200).send(bios);
  } catch (err) {
    next(err);
  }
});

router.get("/:bioId", async (req, res, next) => {
  try {
    const bio = await Bio.findByPk(req.params.bioId);
    
    if (bio === null) {
      res.sendStatus(404);
    } else {
      res.status(200).send(bio);
    }
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const bio = await Bio.create(req.body);

    if (bio === null) {
      res.sendStatus(500);
    } else {
      res.status(201).send(bio);
    }
  } catch (err) {
    next(err);
  }
});

router.put("/:bioId", async (req, res, next) => {
  try {
    const bio = await Bio.findByPk(req.params.bioId);

    if (bio === null) {
      res.sendStatus(404);
    } else {
      await bio.update(req.body);
      res.status(200).send(bio);
    }
  } catch (err) {
    next(err);
  }
});

router.delete("/:bioId", async (req, res, next) => {
  try {
    const bio = await Bio.findByPk(req.params.bioId);

    if (bio === null) {
      res.sendStatus(404);
    } else {
      await bio.destroy();
      res.status(200).send(bio);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
