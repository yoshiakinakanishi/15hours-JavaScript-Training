http('GET', 'http://www.example.co.jp/api/message/1')
	.then(function(data) {
		console.log('id = 1 のメッセージ: ' + data.message)
	})
	.catch(function(error) {
		console.error(error);
	});
