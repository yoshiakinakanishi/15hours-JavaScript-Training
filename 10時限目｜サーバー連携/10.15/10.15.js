function http(method, url, data) {
	return new Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.onload = function() {
			var result = xhr.responseText ? JSON.parse(xhr.responseText) : undefined;
			if (xhr.status === 200) {
				resolve(result);
			} else {
				reject(result || xhr.statusText);
			}
		};
		xhr.onerror = function() {
			reject(xhr.statusText);
		};
		xhr.open(method, url);
		xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
		xhr.send(JSON.stringify(data));
	});
}
