module.exports = function(grunt) {
	grunt.initConfig({
		uglify: {
			dev: {
				files: {
					'javascript/main.min.js': ['javascript/main.js', 'javascript/addon.js']
				},
				options: {
					sourceMap: true,
					banner: '// Production Build'
				}
			},
			build: {
				files:  {
					'javascript/main.min.js': ['javascript/main.js', 'javascript/addon.js']
				},
				options: {
					banner: '// Production Build'
				}
			}
		},
		cssmin: {
			dev: {
				files: [{
					expand: true,
					cwd: 'css/',
					src: ['*.css'],
					dest: 'css/min/',
					ext: '.min.css'
				}],
				options: {
					sourceMap: true
				}
			}
		},
		watch: {
			scripts: {
				files: ['javascript/main.js', 'javascript/addon.js'],
				tasks: ['uglify:dev']
			},
			styles: {
				files: ['css/*.css'],
				tasks: ['cssmin']
			}
		}
	});
	grunt.registerTask(
		'dev', ['uglify', 'cssmin', 'watch']
	);
	grunt.registerTask(
		'build', ['uglify:build', 'cssmin']
	);
	grunt.loadNpmTasks(
		'grunt-contrib-uglify'
	);
	grunt.loadNpmTasks(
		'grunt-contrib-cssmin'
	);
	grunt.loadNpmTasks(
		'grunt-contrib-watch'
	);
}