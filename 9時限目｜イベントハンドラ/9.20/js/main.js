(function() {
	todo.dom.newTodo.element.addEventListener('keydown', onNewTodoKeydown);
	todo.dom.todos.element.addEventListener('click', onTodosClick);
	//// ここから ////
	todo.dom.todos.element.addEventListener('keydown', onTodosKeydown);
	//// ここまで ////

	function onNewTodoKeydown(event) {
		if (event.keyCode !== 13) {
			return; // イベントを何も処理せず抜ける
		}

		var creatingTodo = todo.dom.newTodo.getTodo();
		todo.dom.todos.add(creatingTodo);
		todo.dom.newTodo.clear();
	}

	function onTodosClick(event) {
		if (todo.dom.todos.isDeleteButton(event.target)) {
			onDeleteButtonClick(event);
		} else if (todo.dom.todos.isEditButton(event.target)) {
			onEditButtonClick(event);
		}
	}

	function onEditButtonClick(event) {
		todo.dom.todos.setEditing(event.target, true); // 編集可能モードにする
		todo.dom.todos.focusToEditor(event.target);    // エディタ部にカーソルを移動する
	}

	function onDeleteButtonClick(event) {
		if (!confirm('Do you really want to remove the todo?')) {
			return; // キャンセルを押したら何もしない
		}
		todo.dom.todos.remove(event.target);
	}
})();
