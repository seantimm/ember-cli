var grunt = require('grunt'),
    path = require('path');

var envTasks = {
  'development': 'build:debug',
  'production': 'dist'
};

module.exports = function build(options, done) {
  grunt.cli.tasks = [envTasks[options.environment]];
  grunt.cli.options = {
    base: options.appRoot,
    cliRoot: options.cliRoot,
    appRoot: options.appRoot,
    outputPath: options.outputPath || 'dist/'
  };

  grunt.cli({
    name: 'build',
    gruntfile: path.join(options.cliRoot, 'Gruntfile.js')
  }, done);
};
