module.exports = function (grunt) {
  "use strict";

  grunt.initConfig({
    babel: {
      es5: {
        options: {
          sourceMap: "both",
        },
        files: [
          {
            expand: true,
            cwd: "jsx/",
            src: ["**/*.js", "**/*.jsx"],
            dest: "src/bundle/",

          },
        ],
      },
      es6: {
        options: {
          sourceMap: "both",
        },
        files: [
          {
            expand: true,
            cwd: "jsx/",
            src: ["**/*.js", "**/*.jsx"],
            dest: "dist/es6_compiled",
          },
        ],
      }
    },


    uglify: {
      es6: {
        options: {
          compress: false,
          sourceMap: false,
        },
        files: {
          "./dist/es6.compiled.min.js": ["./dist/es6.compiled.js"],
        },
      },
      minify: {
        options: {
          compress: true,
          sourceMap: true,
        },
        files: {
          "./dist/index.min.js": ["./dist/index.js"],
        },
      },
    },

    browserify: {
      es6: {
        files: [
          [
            {
              expand: true,
              cwd: "./dist/es6_compiled",
              src: ["*.js"],
              dest: "./dist/es6",
            },
          ],
        ],
        options: {
          browserifyOptions: { debug: true },
          transform: [
            [
              "babelify",
              {
                sourceMaps: true,
                babelrc: false,
                // presets: [
                //   ["env",
                //     {
                //       "targets": {
                //         "browsers": [
                //           "chrome 92"
                //         ]
                //       }
                //     }], "es2015", "stage-3"],
                presets: [['@babel/preset-env' , {
                        "targets": {
                          "browsers": [
                            "chrome 90"
                          ]
                        }
                      }] ]
              },
            ],
          ],
          plugin: [["minifyify", { map: true }]],
        },
      },
      es5: {
        files: [
          [
            {
              expand: true,
              cwd: "./src/bundle/",
              src: ["*.js"],
              dest: "./dist/es5",
            },
          ],
        ],
        options: {
          browserifyOptions: { debug: true },
          transform: [
            [
              "babelify",
              {
                sourceMaps: true,
                babelrc: false,
                presets: [ ["env",
                {
                  "targets": {
                    "browsers": [
                      "ie 11"
                    ]
                  }
                }],"es2015", "stage-3"],
              },
            ],
          ],
          plugin: [["minifyify", { map: true }]],
        },
      },
    },
    concat: {
      options: {
        separator: ';',
      },
      es5: {
        src: ['./dist/es5/**.js'],
        dest: './dist/es5/es5.compiled.js',
      },
      es6: {
        src: ['./dist/es6/**.js'],
        dest: './dist/es6/es6.compiled.js',
      },
    },
    watch: {
      scripts: {
        files: ["src/**/*.js", "jsx/**/*.js", "jsx/**/*.jsx"],
        tasks: ["babel", "browserify"],
      },
    },

    clean: {
      es6: {
        src: ['dist/es6_compiled']
      },
      es5: {
        src: ["src/bundle/"]
      }
    }
  });
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.registerTask("es6", ["babel:es6", "browserify:es6", "clean:es6", "concat:es6"]);
  grunt.registerTask("es5", ["babel:es5", "browserify:es5", "clean:es5", "concat:es5"]);
  grunt.registerTask("default", ["es6", "es5"]);
};
