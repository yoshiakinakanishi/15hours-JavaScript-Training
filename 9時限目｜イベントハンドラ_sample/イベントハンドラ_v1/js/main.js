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

// テキストを入力してEnterを押せば、リストが追加される

// 以下の機能はこれから　
// ×ボタンを押すとリストが削除される
// ✎ボタンを押すとリストが編集できる
// リスト編集時にEnterキーを押すと編集内容が確定する
// リスト編集時にEscapeキーを押すと編集を破棄して完了する
// リスト編集時のマウスクリックでチェックボックスが反応しないようにする