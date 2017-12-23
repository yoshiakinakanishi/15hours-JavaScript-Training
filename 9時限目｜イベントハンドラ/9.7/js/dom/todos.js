var todo = todo || {};
todo.dom = todo.dom || {};
todo.dom.todos = todo.dom.todos || {};

(function(_) {
	_.add = function(todo) {
		// <li> 要素を作る
		var li = document.createElement('LI');
		li.id = 'todo-' + todo.id;
		li.classList.add('todo');
		if (todo.done) { // 完了した Todo 項目のグレーアウトに必要
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

		div.appendChild(editButton);
		div.appendChild(deleteButton);

		li.appendChild(input);
		li.appendChild(label);
		li.appendChild(div);

		//// ここから ////
		// `<ul class="todos">` 要素の子要素に追加
		var todos = document.querySelector('.todos');
		todos.appendChild(li);
		//// ここまで ////
	};
})(todo.dom.todos);
