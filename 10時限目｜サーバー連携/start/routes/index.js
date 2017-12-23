var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', csrf, function(req, res, next) {
  res.render('todolist', { title: 'Express' });
});

function csrf(req, res, next) {
	res.locals.csrfToken = req.csrfToken ? req.csrfToken() : '';
	next();
}

module.exports = router;
