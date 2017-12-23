function doSomething(a, b, c) {
	// a, b, c を使った処理
	console.log(a);
	console.log(b);
	console.log(c);
}

fetchA(function(a) {
	fetchB(function(b) {
		fetchC(function(c) {
			doSomething(a, b, c);
		});
	});
});

//// 以下、動作確認用 ////
function fetchA(callback) {
	setTimeout(function() {
		callback('a');
	}, 1000);
}

function fetchB(callback) {
	setTimeout(function() {
		callback('b');
	}, 1000);
}

function fetchC(callback) {
	setTimeout(function() {
		callback('c');
	}, 1000);
}
