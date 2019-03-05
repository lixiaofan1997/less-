module.exports=function(grunt){
  grunt.initConfig({
  less: {
    development: {
      files: {
              'css/layout.css': 'less/layout.less'           
      }
        
    },
  }
});
grunt.localNpmTasks('grunt-contrib-less');
grunt.registerTask('default',['less']);
};
