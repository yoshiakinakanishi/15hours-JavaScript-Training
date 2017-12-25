(function() {
	/*
	<input class="todo-title">要素である(todo.dom.newTodo.ele2)の
	keydownイベントにonNewTodoKeydownを登録 => イベントハンドラ登録
	*/
	todo.dom.newTodo.ele2.addEventListener('keydown', onNewTodoKeydown);

	function onNewTodoKeydown(event) { // event引数をかならず利用有無に関係なく設定する！
		//以下の3行をかならず追加する
		if (event.keyCode !== 13) { //キーがEnterかどうかを判定するにはevent.keyCodeで値は13とする
			return; // イベントを何も処理せず抜ける
		}

		var creatingTodo = todo.dom.newTodo.getTodo();
		todo.dom.todos.add(creatingTodo);
		todo.dom.newTodo.clear();
	}

})();

// テキストを入力してEnterを押せば、リストが追加される　※編集＆削除の機能はまだ