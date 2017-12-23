fetchMyList()
	.then(function(myList) {
		doSomething(myList);
	}, function(error) {
		window.alert(error);
	});

//// 以下、動作確認用 ////
function fetchMyList() {
	// return Promise.resolve([1, 3, 5]); // 正常終了
	return Promise.reject(new Error('Error')); // 異常終了
}

function doSomething(myList) {
	console.log(myList);
}
