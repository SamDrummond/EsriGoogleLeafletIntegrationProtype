module.exports = function(grunt){
	
	grunt.initConfig({
		sync:{
			main:{
				files:[{
					cwd:"src",
					src:[
						'**'
					],
					dest:"bin"
				}],
				pretend:true,
				verbose:true
			}
		},
		watch:{
			files:['src/**.js', 'src/**.html', 'src/**.css'],
			tasks:['sync']
		}
	});
	
	grunt.event.on('watch', function(action, filepath, target){
		grunt.log.writeln(target + ": " + filepath + ' has ' + action);
	});
	
	grunt.loadNpmTasks('grunt-sync');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', 'watch');
}