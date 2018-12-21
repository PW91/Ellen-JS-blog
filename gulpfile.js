"use strict";

var gulp = require("gulp");
var browserSync = require("browser-sync");
var nodemon = require("gulp-nodemon");

const startNodemon = done => {
	const STARTUP_TIMEOUT = 5000;
	const server = nodemon({
		script: "keystone.js",
		stdout: false,
		ignore: ["public/"]
	});
	let starting = false;

	const onReady = () => {
		starting = false;
		done();
	};

	server.on("start", () => {
		starting = true;
		setTimeout(onReady, STARTUP_TIMEOUT);
	});

	server.on("stdout", stdout => {
		process.stdout.write(stdout);
		if (starting) {
			onReady();
		}
	});
};

const startBrowserSync = done => {
	browserSync.init(
		{
			proxy: "http://localhost:3000",
			files: ["public/**/*.scss", "public/**/*.js", "templates/**/*.html"],
			port: 8080
		},
		done
	);
};

gulp.task("default", gulp.series(startNodemon, startBrowserSync));
