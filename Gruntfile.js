module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			main: {
				files: {
					'dist/bitmask.min.js': ['src/bitmask.js']
				}
			}
		},
		clean: {
			dist: ['dist'],
			build: ['.tmp']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('build', [
		'clean:dist',
		'uglify:main',
	]);

	grunt.registerTask('default', ['build'])
};
