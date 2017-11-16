const gulp = require("gulp");
const exec = require("gulp-exec");
const uglify = require("gulp-uglify");
const fs = require("fs");
const path = require("path");

const SRC_DIR = path.resolve(__dirname, "src");
const DIST_DIR = path.resolve(__dirname, "dist");
// ---
const options = {
  continueOnError: false, // default = false, true means don't emit error event
  pipeStdout: false, // default = false, true means stdout is written to file.contents
  customTemplatingThing: "test" // content passed to gutil.template()
};
const reportOptions = {
  err: true, // default = true, false means don't write err
  stderr: true, // default = true, false means don't write stderr
  stdout: true // default = true, false means don't write stdout
};

gulp.task("build", () => {
  return gulp
    .src("./src/index.js")
    .pipe(exec("npm run build", options))
    .pipe(exec.reporter(reportOptions));
});

gulp.task("watch", () => {
  gulp.watch([`${SRC_DIR}/**/*`], ["build"]);
});

// gulp.task("default", () => {
//   gulp
//     .src("src/index.js")
//     .pipe(

//     )
//     // babel 一些奇怪的转化方式，需要通过 uglify 再转换一下
//     .pipe(
//       uglify({
//         mangle: false,
//         preserveComments: "all",
//         compress: {
//           sequences: false, // join consecutive statemets with the “comma operator”
//           properties: false, // optimize property access: a["foo"] → a.foo
//           // dead_code     : true,  // discard unreachable code
//           // drop_debugger : true,  // discard “debugger” statements
//           // unsafe        : false, // some unsafe optimizations (see below)
//           // conditionals  : true,  // optimize if-s and conditional expressions
//           comparisons: false, // optimize comparisons
//           // evaluate      : true,  // evaluate constant expressions
//           // booleans      : true,  // optimize boolean expressions
//           // loops         : true,  // optimize loops
//           unused: true, // drop unused variables/functions
//           // hoist_funs    : true,  // hoist function declarations
//           // hoist_vars    : false, // hoist variable declarations
//           if_return: false, // optimize if-s followed by return/continue
//           join_vars: true // join var declarations
//           // cascade       : true,  // try to cascade `right` into `left` in sequences
//           // side_effects  : true,  // drop side-effect-free statements
//           // warnings      : true,  // warn about potentially dangerous optimizations/code
//           // global_defs   : {}     // global definitions
//         },
//         output: {
//           beautify: true
//         },
//         banner: "/* eew */"
//       })
//     )
//     .pipe(gulp.dest("dist"));
// });
