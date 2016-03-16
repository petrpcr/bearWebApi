module.exports = function(grunt) {
  grunt.initConfig({
    ts: {
      library : {
        
         tsconfig:"test/src"   
        
      }
    }
  });
  grunt.loadNpmTasks("grunt-ts");
  grunt.registerTask("default", ["ts"]);
};