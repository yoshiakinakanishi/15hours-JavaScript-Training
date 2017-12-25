var todo = todo || {};
todo.dom = todo.dom || {};
todo.dom.newTodo = todo.dom.newTodo || {};

(function(test) {
	test.ele2 = document.querySelector('.todo-title');

	test.clear = function() {
		test.ele2.value = '';
	};

	test.getTodo = function() {
		return {
			title: test.ele2.value,
			done: false
		};
	};
})(todo.dom.newTodo);
