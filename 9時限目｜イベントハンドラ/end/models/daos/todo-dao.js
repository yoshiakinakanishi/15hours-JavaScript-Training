var JsonDb = require('node-json-db');

var TodoDao = function(fileName) {
	this.db_ = new JsonDb(fileName, true, true);
};

TodoDao.prototype.fetchAll = function() {
	this.db_.reload(); // In case there has a exterior change for tests
	var todoObj = this.db_.getData('/todo');
	var todos = [];
	for (var i in todoObj) {
		if (todoObj.hasOwnProperty(i)) {
			todos.push(todoObj[i]);
		}
	}
	return todos;
};

TodoDao.prototype.create = function(todo) {
	this.db_.reload();
	var id = this.db_.getData('/seq');
	this.db_.push('/seq', id + 1);
	var newTodo = {
		id: id,
		title: todo.title,
		done: todo.done
	};
	this.db_.push('/todo/' + id, newTodo, true);
	return newTodo;
};

TodoDao.prototype.update = function(todo) {
	this.db_.reload();
	this.db_.push('/todo/' + todo.id, todo, true);
	return todo;
};

TodoDao.prototype.remove = function(id) {
	this.db_.reload();
	this.db_.delete('/todo/' + id);
	this.db_.save();
};

module.exports = TodoDao;
