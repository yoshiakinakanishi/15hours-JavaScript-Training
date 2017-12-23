var todo = todo || {};
todo.dom = todo.dom || {};
todo.dom.newTodo = todo.dom.newTodo || {};

(function(_) {
	_.element = document.querySelector('.todo-title');

	_.clear = function() {
		_.element.value = '';
	};

	_.getTodo = function() {
		return {
			title: _.element.value,
			done: false
		};
	};
})(todo.dom.newTodo);
