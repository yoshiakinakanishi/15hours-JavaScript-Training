var fixture = require('../lib/fixture.js');

module.exports = {
	beforeEach: function(browser, done) {
		fixture('todo', 'todo/default').then(done);
	},

	'テストケース': function(browser) {
		browser.init(); // browser.url('http://localhost:3000/'); と同じ。Tiny Todo List のページを開く
		// ここにテスト内容を記述
		browser.end();
	}
};
