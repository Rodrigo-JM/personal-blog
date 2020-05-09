const router = require('express').Router()

router.post('/posts', async (req, res, next) => {
    try {
        if (req.files === null) {
            return res.status(400).json({msg: 'No File Uploaded'})
        }

        const file = req.files.file

    file.mv(`${__dirname}/../../client/uploads/posts/${file.name}`, err => {
            if (err) {
                console.error(err)
                return res.status(500).send(err)
            }

            res.json({ fileName: file.name, filePath: `client/uploads/posts/${file.name}`})
        })

    } catch(err) {
        next(err)
    }
})

router.post('/bios', async (req, res, next) => {
    try {
        if (req.files === null) {
            return res.status(400).json({msg: 'No File Uploaded'})
        }

        const file = req.files.file

    file.mv(`${__dirname}/../../client/uploads/bios/${file.name}`, err => {
            if (err) {
                console.error(err)
                return res.status(500).send(err)
            }

            res.json({ fileName: file.name, filePath: `client/uploads/bios/${file.name}`})
        })

    } catch(err) {
        next(err)
    }
})

router.post('/projects', async (req, res, next) => {
    try {
        if (req.files === null) {
            return res.status(400).json({msg: 'No File Uploaded'})
        }

        const file = req.files.file

    file.mv(`${__dirname}/../../client/uploads/projects/${file.name}`, err => {
            if (err) {
                console.error(err)
                return res.status(500).send(err)
            }

            res.json({ fileName: file.name, filePath: `client/uploads/projects/${file.name}`})
        })

    } catch(err) {
        next(err)
    }
})

module.exports = router