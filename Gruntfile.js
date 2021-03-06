var fs = require('fs');
var md = require('markdown-it')();
var emoji = require('markdown-it-emoji');
var markdownItAnchor = require('markdown-it-anchor');


module.exports = function(grunt) {

  // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
  require('load-grunt-tasks')(grunt);

  var configs = require('load-grunt-configs')(grunt, {
    config: {
      src: 'tasks/*.js',
    },
  });

  grunt.initConfig(configs);

  grunt.registerTask('build-rules-html', 'Build the rules', function() {
    md.use(emoji);
    md.use(markdownItAnchor, {
      permalink: true,
    });
    var markdown = md.render(fs.readFileSync('docs/rules.md',
                                             { encoding: 'utf8' }));
    var template = fs.readFileSync('docs/rules.tmpl',
                                   { encoding: 'utf8' });
    var html = template.replace('{{MARKDOWN}}', markdown);
    fs.writeFileSync('docs/html/index.html', html);
  });

  grunt.registerTask('start', [
    'webpack:eslintwatch',
    'webpack:buildwatch',
  ]);

  grunt.registerTask('build', [
    'webpack:eslint',
    'webpack:build',
  ]);

  grunt.registerTask('publish-rules',
                     'Used by travis to publish rule docs', function() {
    // Require the rules build and copy.
    this.requires(['copy', 'build-rules-html']);

    if (process.env.TRAVIS === 'true' &&
        process.env.TRAVIS_SECURE_ENV_VARS === 'true' &&
        process.env.TRAVIS_PULL_REQUEST === 'false') {
      grunt.log.writeln('Pushing branch for docker build');
      grunt.task.run('gh-pages');
    } else {
      grunt.log.writeln('Skipping rules publication.');
    }
  });

  grunt.registerTask('test', [
    'clean',
    'instrument',
    'webpack:build',
    'webpack:eslint',
    'webpack:coverage',
    'mochaTest',
    'storeCoverage',
    'makeReport',
    'eslint',
    'jscs',
  ]);

  grunt.registerTask('test-no-coverage', [
    'clean',
    'webpack:eslint',
    'webpack:test',
    'mochaTest',
    'eslint',
    'jscs',
  ]);

};
