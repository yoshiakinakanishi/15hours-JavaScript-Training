fetchMyList()
	.then(doSomething);

//// 以下、動作確認用 ////
function fetchMyList() {
	return Promise.resolve([1, 3, 5]);
}

function doSomething(myList) {
	console.log(myList);
}
