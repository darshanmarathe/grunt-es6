const babelify = require("babelify");
module.exports = function (grunt) {
  "use strict";
  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: "src",
            src: ["**/*.js"],
            dest: "dist",
          },
        ],
      },
    },

    browserify: {
      production: {
        src: ["./src/index.js"],
        dest: "./dist/main.js",
        options: {
          browserifyOptions: { debug: true },
          transform: [
            [
              "babelify",
              {
                presets: ["es2015", "stage-3"],
                //plugins: ["@babel/plugin-transform-react-jsx"],
              },
            ],
          ],
          plugin: [
            // [
            //   "factor-bundle",
            //   {
            //     outputs: ["./dist/index.js"],
            //   },
            // ],
            ["minifyify", { map: false }],
          ],
        },
      },
    },
    watch: {
      scripts: {
        files: ["src/**/*.js"],
        tasks: ["babel", "browserify:production"],
      },
    },
  });
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-browserify");
  grunt.registerTask("default", ["browserify:production"]);
};
