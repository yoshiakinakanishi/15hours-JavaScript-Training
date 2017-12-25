var todo = todo || {};
todo.dom = todo.dom || {};
todo.dom.todos = todo.dom.todos || {};

(function(_) {
	// ul要素のclass属性を取得して変数(_.ele)に格納する　※変数名はelementでもeleでもいい!!
	_.ele = document.querySelector('.todos');
	_.add = function(todo) {
		// <li> 要素を作る
		var li = document.createElement('LI');
		li.id = 'todo-' + todo.id;
		li.classList.add('todo');
		if (todo.done) { // 完了した Todo 項目の色変更に必要
			li.classList.add('todo-done');
		}

		var input = document.createElement('INPUT');
		input.id = 'todo-' + todo.id + '-checkbox';
		input.type = 'checkbox';
		input.checked = todo.done;
		var label = document.createElement('LABEL');
		label.htmlFor = input.id;
		label.textContent = todo.title;

		var div = document.createElement('DIV');
		div.classList.add('todo-operation');
		var editButton = document.createElement('BUTTON');
		editButton.value = 'edit';
		editButton.classList.add('todo-operation-edit');
		editButton.textContent = '✎';
		var deleteButton = document.createElement('BUTTON');
		deleteButton.value = 'delete';
		deleteButton.classList.add('todo-operation-delete');
		deleteButton.textContent = '×';

		// ここからはappendChildで要素の子要素に要素を追加する
		// div => button
		div.appendChild(editButton);
		div.appendChild(deleteButton);

		// li => input/label/div
		li.appendChild(input);
		li.appendChild(label);
		li.appendChild(div);

		// ul => li
		/* 
		document.querySelector('.todos');は決して変化しない要素なので、
		最初に一度だけ取得するように変更する
		*/
		_.ele.appendChild(li);
	};
})(todo.dom.todos);
