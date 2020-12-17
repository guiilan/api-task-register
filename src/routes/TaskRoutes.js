const express = require("express");

const router = express.Router();

const TaskController = require("../controller/TaskController");
const TaskValidation = require("../middlewares/TaskValidation");
const MacaddressValidation = require("../middlewares/MacaddressValidation");

router.post('/', TaskValidation ,TaskController.create);
router.put('/:id', TaskValidation ,TaskController.update);
router.get('/:id', TaskController.show);

router.delete('/:id', TaskController.delete)
router.put('/:id/:done', TaskController.done)

router.get('/filter/all/:macaddress', TaskController.all)
router.get('/filter/late/:macaddress', TaskController.late)
router.get('/filter/today/:macaddress', TaskController.today)
router.get('/filter/toweek/:macaddress', TaskController.toweek)
router.get('/filter/tomonth/:macaddress', TaskController.tomonth)
router.get('/filter/toyear/:macaddress', TaskController.toyear)

module.exports = router;