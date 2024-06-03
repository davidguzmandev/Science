let express = require('express');
let router = express.Router();
let heroeController = require('../controllers/heroeController');

router.get('/', heroeController.lista);
router.get('/detalle/id/:id', heroeController.detalle);
router.get('/bio/id/:id/:ok?', heroeController.bio);


module.exports = router;