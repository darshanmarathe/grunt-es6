const babelify = require('babelify');
module.exports = function (grunt) {
   'use strict';
   grunt.initConfig({
       babel: {
           options: {
               sourceMap: true
           },
           dist: {
               files: [
                   {
                       expand : true,
                       cwd : 'src',
                       src : ['**/*.js'],
                       dest : 'dist'
                   }
               ]
           }
       },

    browserify: {
        dist: {
            files: {
                // destination for transpiled js : source js
                'dist/main.js': 'src/index.js'
            },
            options: {
                transform: [['babelify', { presets: ["@babel/preset-env"] }]],
                browserifyOptions: {
                    debug: true
                }
            },
            plugin: [
             [ require('esmify'), { /* ... options ... */ } ]
           ]
        }
    },
       watch:{
        scripts: {
            files : ['src/**/*.js'],
            tasks: ['babel' , 'browserify']
        }
    }
   });
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-babel');
   grunt.loadNpmTasks('grunt-browserify');
   grunt.registerTask('default', ['babel' , 'browserify']);
};
