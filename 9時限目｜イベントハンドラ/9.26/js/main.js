(function() {
	todo.dom.newTodo.element.addEventListener('keydown', onNewTodoKeydown);
	todo.dom.todos.element.addEventListener('click', onTodosClick);
	todo.dom.todos.element.addEventListener('keydown', onTodosKeydown);

	function onNewTodoKeydown(event) {
		if (event.keyCode !== 13) {
			return; // イベントを何も処理せず抜ける
		}

		var creatingTodo = todo.dom.newTodo.getTodo();
		todo.dom.todos.add(creatingTodo);
		todo.dom.newTodo.clear();
	}

	function onTodosClick(event) {
		//// ここから ////
		if (todo.dom.todos.isEditing(event.target)) {
			event.preventDefault();
			return;
		}
		//// ここまで ////

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

	function onTodosKeydown(event) {
		if (!todo.dom.todos.isEditing(event.target)) {
			return;
		}

		switch (event.keyCode) {
			case 13:
				var updatingTodo = todo.dom.todos.getTodo(event.target);
				todo.dom.todos.refresh(event.target, updatingTodo);
				todo.dom.todos.setEditing(event.target, false);
				break;
			case 27:
				var backupTodo = todo.dom.todos.getBackup(event.target);
				todo.dom.todos.refresh(event.target, backupTodo);
				todo.dom.todos.setEditing(event.target, false);
				break;
		}
	}
})();
