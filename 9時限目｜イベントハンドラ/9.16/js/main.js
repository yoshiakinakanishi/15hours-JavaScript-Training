(function() {
	todo.dom.newTodo.element.addEventListener('keydown', onNewTodoKeydown);
	todo.dom.todos.element.addEventListener('click', onTodosClick);

	function onNewTodoKeydown(event) {
		if (event.keyCode !== 13) {
			return; // イベントを何も処理せず抜ける
		}

		var creatingTodo = todo.dom.newTodo.getTodo();
		todo.dom.todos.add(creatingTodo);
		todo.dom.newTodo.clear();
	}

	//// ここから ////
	function onTodosClick(event) {
		if (todo.dom.todos.isDeleteButton(event.target)) {
			onDeleteButtonClick(event);
		}
	}

	function onDeleteButtonClick(event) {
		if (!confirm('Do you really want to remove the todo?')) {
			return; // キャンセルを押したら何もしない
		}
		todo.dom.todos.remove(event.target);
	}
	//// ここまで ////
})();
