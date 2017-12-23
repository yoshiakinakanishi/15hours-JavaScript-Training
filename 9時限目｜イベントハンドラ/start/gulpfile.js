var gulp = require('gulp');
var less = require('gulp-less');
var jasmine = require('gulp-jasmine');
var http = require('http');
var nightwatch = require('nightwatch');
var sequence = require('gulp-run-sequence');
var sequenceAndFinally = function(seq, final, callback) {
	var _seq = seq.slice(0);
	_seq.push(function(error1) {
		var _final = final.slice(0);
		_final.push(function(error2) {
			callback(error1 || error2);
		});
		sequence.apply(null, _final);
	});
	sequence.apply(null, _seq);
};
var app = require('./app.js');

var config = {
	src: {
		less: './less/**/*.less'
	},
	dest: {
		less: './public/css'
	},
	test: {
		selenium: './test/selenium/**/*.js'
	}
};

var server;
app.set('port', 3000);

gulp.task('less', function() {
	return gulp.src(config.src.less)
		.pipe(less())
		.pipe(gulp.dest(config.dest.less));
});

gulp.task('server:start', function(done) {
	server = http.createServer(app);
	server.listen(3000);
	server.on('listening', done);
});

gulp.task('server:stop', function(done) {
	server.close(done);
});

gulp.task('test', ['test:selenium']);

gulp.task('test:selenium:body', function(done) {
	//return gulp.src(config.test.selenium)
	//	.pipe(jasmine());
	nightwatch.runner({
		config: 'nightwatch.json',
		env: 'default'
	}, function(passed) {
		done(passed ? undefined : 'Failed to test');
	});
});

gulp.task('test:selenium', function(done) {
	sequenceAndFinally(['server:start', 'test:selenium:body'], ['server:stop'], done);
});

gulp.task('build', ['less']);