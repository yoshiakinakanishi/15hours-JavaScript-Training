var fs = require('fs');
var Promise = require('selenium-webdriver').promise.Promise;

function fixture(db, fixture) {
	var dbPath = 'data/' + db + (endsWith(db, '.json') ? '' : '.json');
	var fixturePath = 'test/selenium/fixtures/' + fixture + (endsWith(db, '.json') ? '' : '.json');
	process.stdout.write('Fixture: ' + fixturePath + ' -> ' + dbPath + ' ... ');
	return new Promise(function(resolve, reject) {
		fs.readFile(fixturePath, function(err, data) {
			if (err) {
				process.stderr.write('FAILED\n');
				process.stderr.write(err + '\n');
				process.stdout.write('\n');
				setTimeout(reject.bind(null, err));
				return;
			}
			fs.writeFile(dbPath, data, function(err) {
				if (err) {
					process.stderr.write('FAILED\n');
					process.stderr.write(err + '\n');
					process.stdout.write('\n');
					setTimeout(reject.bind(null, err));
					return;
				}
				process.stdout.write('SUCESS\n');
				setTimeout(resolve);
			});
		})
	});
}

function endsWith(str, suffix) {
	var index = str.indexOf(suffix);
	if (index === -1) {
		return false;
	}
	return index === (str.length - suffix.length);
}

module.exports = fixture;