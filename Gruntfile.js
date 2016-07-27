module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        express: {
            all: {
                options: {
                    port: 9001,
                    hostname: 'localhost',
                    bases: ['./app'],
                    livereload: true
                }
            }
        },
        watch: {
            files: ['app/**'],
            tasks: ''
        }
    });

    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('serve', ['express', 'watch']);
};