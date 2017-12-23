Promise.all([
	fetchA(), fetchB(), fetchC()
]).then(function(data) {
	var a = data[0]; // fetchA() の結果
	var b = data[1]; // fetchB() の結果
	var c = data[2]; // fetchC() の結果
	doSomething(a, b, c);
});

//// 以下、動作確認用 ////
function fetchA() {
	return Promise.resolve('a');
}

function fetchB() {
	return Promise.resolve('b');
}

function fetchC() {
	return Promise.resolve('c');
}

function doSomething(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}
