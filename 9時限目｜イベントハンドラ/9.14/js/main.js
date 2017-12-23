(function() {
	todo.dom.newTodo.element.addEventListener('keydown', onNewTodoKeydown);

	//// ここから ////
	function onNewTodoKeydown(event) {  // ← 引数を追加
		if (event.keyCode !== 13) { // ← ここから3行を追加
			return; // イベントを何も処理せず抜ける
		}

		var creatingTodo = todo.dom.newTodo.getTodo();
		todo.dom.todos.add(creatingTodo);
		todo.dom.newTodo.clear();
	}
	//// ここまで ////
})();
