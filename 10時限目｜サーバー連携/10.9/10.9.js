function doSomething(a, b, c) {
	// a, b, c を使った処理
	console.log(a);
	console.log(b);
	console.log(c);
}

var a;
var b;
var c;
var count = 3;

fetchA(function(_a) {
	a = _a;
	if (--count === 0) {
		doSomething(a, b, c);
	}
});

fetchB(function(_b) {
	b = _b;
	if (--count === 0) {
		doSomething(a, b, c);
	}
});

fetchC(function(_c) {
	c = _c;
	if (--count === 0) {
		doSomething(a, b, c);
	}
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
