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
            cwd: "jsx/",
            src: ["**/*.js", "**/*.jsx"],
            dest: "src/bundle",
          },
        ],
      },
    },

    babel2: {
      options: {
        sourceMap: false,
        presets: [['@babel/preset-env', { "modules": false }]]
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: '../src/js/es6/',
            src: ['*.js'],
            dest: '../src/js/es6_converted/'
          }
        ]
      },
    },
    uglify: {
      minify: {
        options: {
          compress: true,
          sourceMap: false
        },
        files: {
          './dist/index.min.js': [
            './dist/index.js'
          ]
        }
      },
    },

    browserify: {
      dist: {
        files: [
          [
            {
              expand: true,
              cwd: './src',
              src: ['*.js'],
              dest: './dist'
            }
          ]
        ],
        options: {
          browserifyOptions: { debug: true },
          transform: [
            [
              "babelify",
              {
                babelrc: false,
                presets: ["es2015", "stage-3"]
              },
            ],
          ],
          plugin: [
            ["minifyify", { map: false }],
          ],
        }
      }
    },
    browserify_org: {
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
        tasks: ["babel", "browserify"],
      },
    },
  });
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask("default", ["babel" , "browserify" , "uglify"]);
};
