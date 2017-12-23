function fetchMyList() {
	// 重たい処理をシミュレート
	var j = 0;
	for(var i = 0; i < 1000000000; i++) {
		j += i;
	}

	// 処理の結果を返す
	return [1, 3, 5];
}

function doSomething(myList) {
	// 結果を (myList) 利用する処理
	console.log(myList);
}

var myList = fetchMyList(); // データが取得できるまでいつまでも待ちます

// 以下、結果 (myList) を利用した処理... はなかなか実行されない
doSomething(myList);

console.log('準備完了');
