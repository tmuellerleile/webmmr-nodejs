module.exports = function(grunt) {

	grunt.initConfig({
		sass: {
			main: {
				files: {
					'css/theme/muellerleile.net.css': 'css/theme/source/muellerleile.net.scss'
				}
			}
		},

		watch: {
			theme: {
				files: [ 'css/theme/source/*.scss', 'css/theme/template/*.scss' ],
				tasks: 'themes'
			}
		}

	});

	grunt.loadNpmTasks( 'grunt-contrib-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );

	grunt.registerTask( 'default', [ 'sass' ] );
  grunt.registerTask( 'themes', [ 'sass' ] );
};
