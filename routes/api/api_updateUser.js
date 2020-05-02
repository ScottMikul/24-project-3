
const express = require("express")
const router = express.Router();
const updateUSer = require("../../controllers/updateUser.Controller");

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(updateUSer.findById)
  .put(updateUSer.update)
  .delete(updateUSer.remove);

module.exports = router;