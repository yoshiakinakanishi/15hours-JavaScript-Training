var todo = todo || {};
todo.data = todo.data || {};
todo.data.todo = todo.data.todo || {};

(function(_) {
	var id = 10001;

	/**
	 * @param {Todo} creatingTodo
	 * @returns {Promise.<Todo>}
	 */
	_.create = function(creatingTodo) {
		return Promise.resolve({
			id: id++,
			title: creatingTodo.title,
			done: creatingTodo.done
		});
	};

	/**
	 * @returns {Promise.<Array.<Todo>>}
	 */
	_.fetchAll = function() {
		return Promise.resolve([
			{
				id: 1,
				title: '予定1',
				done: false
			}, {
				id: 2,
				title: '予定2',
				done: true
			}
		]);
	};

	/**
	 * @param {Todo} updatingTodo
	 * @returns {Promise.<Todo>}
	 */
	_.update = function(updatingTodo) {
		return Promise.resolve({
			id: updatingTodo.id,
			title: updatingTodo.title,
			done: updatingTodo.done
		});
		//return Promise.reject('ERROR');
	};

	/**
	 * @param {number} id
	 * @returns {Promise}
	 */
	_.remove = function(id) {
		return Promise.resolve();
	};
})(todo.data.todo);
