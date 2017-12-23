var express = require('express');
var router = express.Router();
var path = require('path');
var todoDao = new (require('../models/daos/todo-dao.js'))(path.join(__dirname, '../data/todo.json'));

router.post('/new', function(req, res) {
	res.json(todoDao.create(req.body));
});

router.get('/all', function(req, res) {
	res.json(todoDao.fetchAll());
});

router.put('/:id(\\d+)', function(req, res) {
	res.json(todoDao.update(req.body));
});

router.delete('/:id(\\d+)', function(req, res) {
	todoDao.remove(req.params.id);
	res.end();
});

module.exports = router;