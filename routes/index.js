const express = require('express');
const router = express.Router();

const booksController = require("../controllers/booksController");

router.route("/books")
    .get(booksController.findAll)
    // .get(booksController.searchApi)
    .post(booksController.save)

router.route("/books/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove)

// If no API routes are hit, send the React app
// router.use(function (req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;