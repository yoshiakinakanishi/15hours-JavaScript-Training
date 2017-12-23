(function() {
	todo.dom.newTodo.element.addEventListener('keydown', onNewTodoKeydown);

	function onNewTodoKeydown() {
		var creatingTodo = todo.dom.newTodo.getTodo();
		todo.dom.todos.add(creatingTodo);
		todo.dom.newTodo.clear();
	}
})();
