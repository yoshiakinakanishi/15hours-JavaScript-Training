(function() {
	//<input class="todo-title">要素(todo.dom.newTodo.element)のkeydownイベントに、onNewTodoKeydownを登録
	todo.dom.newTodo.element.addEventListener('keydown', onNewTodoKeydown);

	function onNewTodoKeydown(event) {
		//以下3行をかならず追加する
		if (event.keyCode !== 13) { //キーがEnterかどうかを判定するにはevent.keyCodeで値は13とする
			return; // イベントを何も処理せず抜ける
		}

		var creatingTodo = todo.dom.newTodo.getTodo();
		todo.dom.todos.add(creatingTodo);
		todo.dom.newTodo.clear();
	}

})();
