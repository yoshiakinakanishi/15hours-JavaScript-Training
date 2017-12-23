function fetchMyList(callback) {
	setTimeout(function() { // 非同期的に処理
		// 重たい処理をシミュレート
		var j = 0;
		for(var i = 0; i < 1000000000; i++) {
			j += i;
		}

		// 処理の結果を返す
		callback([1, 3, 5]);
	}, 0);
}

function doSomething(myList) {
	// 結果を (myList) 利用する処理
	console.log(myList);
}

// データが取得できたら doSomething 読んでね。それまで他のことやってるから
fetchMyList(doSomething);

// 非同期処理実行中に他のことができる
console.log('準備完了');
