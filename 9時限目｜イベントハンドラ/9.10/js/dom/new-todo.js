var todo = todo || {};
todo.dom = todo.dom || {};
todo.dom.newTodo = todo.dom.newTodo || {};

(function(_) {
	_.element = document.querySelector('.todo-title');

	//// ここから ////
	_.clear = function() {
		_.element.value = '';
	};
	//// ここまで ////
})(todo.dom.newTodo);
