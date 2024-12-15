const express = require("express");
// const taskController = require("../controller/taskContoller");
const taskController=require("../controller/taskController")
const router = express.Router();

router.post("/create", taskController.createTask);
router.post("/complete", taskController.completeTask);

router.get("/:listId", taskController.getTasksForList);
router.put("/update/:taskId", taskController.updateTask);

module.exports = router;