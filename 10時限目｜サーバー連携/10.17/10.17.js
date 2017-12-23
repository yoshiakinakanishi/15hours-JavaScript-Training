http('POST', 'http://www.example.co.jp/api/message/new', {message: 'It works!'})
	.then(function(data) {
		console.log('id = ' + data + 'で新規保存しました: ' + data.message);
	})
	.catch(function(error) {
		console.error(error);
	});
