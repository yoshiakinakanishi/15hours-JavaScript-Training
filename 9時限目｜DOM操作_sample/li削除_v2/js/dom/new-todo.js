var newTodo = newTodo || {};
/*todo.dom = todo.dom || {};
todo.dom.newTodo = todo.dom.newTodo || {};*/

(function(TEST) {
	TEST.element = document.querySelector('.todo-title');

	TEST.clear = function() {
		TEST.element.value = '';
	};

	TEST.getTodo = function() {
		return {
			title: TEST.element.value,
			done: false
		};
	};
})(newTodo);


//イベントハンドラの登録をしていないので、コンソール画面のみで確認する

/*
	テキスト欄になにか入力する(東城会)
	console.log(newTodo.getTodo());  // {title: "東城会", done: false}
	console.log(oldTodo.getTodo()); // 文法エラー
*/

/*
	テキスト欄になにかを入力する(東城会)
	var create = newTodo.getTodo();
	oldTodo.add(create);　//todos.jsの変数oldTodo
	newTodo.clear(); 
	// テキスト欄は空となって削除され、liが追加される => Enterキーはもちろん今は無効のまま
*/

