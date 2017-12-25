var todo = todo || {};
todo.dom = todo.dom || {};
todo.dom.newTodo = todo.dom.newTodo || {};

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
})(todo.dom.newTodo);


//まだイベントハンドラを登録していないのでコンソール画面のみで確認する

/*
テキスト欄になにか入力する(東城会)
console.log(todo.dom.newTodo.getTodo()); 
// {title: "東城会", done: false}
*/

/*
テキスト欄になにかを入力する(東城会)
var create = todo.dom.newTodo.getTodo();
todo.dom.todos.add(create);
todo.dom.newTodo.clear(); 
// テキスト欄は空となって削除され、liが追加される => Enterキーはもちろん今は無効のまま
*/