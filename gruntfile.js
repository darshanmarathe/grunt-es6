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
          //sourceMap: "both",
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
          browserifyOptions: { debug: false },
          transform: [
            [
              "babelify",
              {
                sourceMaps: false,
                babelrc: false,
                presets: [
                  ["env",
                    {
                      "targets": {
                        "browsers": [
                          "chrome 90"
                        ]
                      },
                      "useBuiltIns": "usage",
                    }], "es2015", "stage-3"],
              
              },
            ],
          ],
         // plugin: [["minifyify", { map: true }]],
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
                sourceMaps: false,
                babelrc: false,
                presets: ["es2015", "stage-3"],
              },
            ],
          ],
          plugin: [["minifyify", { map: false }]],
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

   

    uglify: {
      es6: {
        options: {
          compress: {
            drop_console: true
          },
          sourceMap: false,
        },
        files: {
          "./dist/es6.compiled.min.js": ["./dist/es6/es6.compiled.js"],
        },
      },
      es5: {
        options: {
          compress: {
            drop_console: true
          },
          sourceMap: false,
        },
        files: {
          "./dist/es5.compiled.min.js": ["./dist/es5/es5.compiled.js"],
        },
      },
    },
   
    clean: {
      es6: {
        src: ['dist/es6_compiled' ,'dist/es6']
      },
      es5: {
        src: ["src/bundle/" ,'dist/es5']
      }
    },
   
    watch: {
      scripts: {
        files: ["src/**/*.js", "jsx/**/*.js", "jsx/**/*.jsx"],
        tasks: ["default"],
      },
    },

    
  });
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-babel"); // ES 6 2015 2017 18 20  React to ES6
  grunt.loadNpmTasks("grunt-browserify"); // Output of babel to browser specefic
  grunt.loadNpmTasks("grunt-contrib-uglify"); // Out browserify and uglify
  grunt.loadNpmTasks("grunt-contrib-concat"); // Take all file and makes into 1 file
  grunt.loadNpmTasks('grunt-contrib-clean'); // clean 
  grunt.registerTask("es6", ["babel:es6", "browserify:es6",  "concat:es6" ,"uglify:es6","clean:es6"]);
  grunt.registerTask("es5", ["babel:es5", "browserify:es5", "concat:es5" ,"uglify:es5", "clean:es5"]);
  grunt.registerTask("default", ["es6", "es5"]);
};
  