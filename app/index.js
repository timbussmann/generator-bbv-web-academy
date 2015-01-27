var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  writing: function(){
    // this.fs.copy(
    //   this.templatePath('index.html'),
    //   this.destinationPath('index.html')
    // );
    //
    // this.fs.copy(
    //   this.templatePath('app.js'),
    //   this.destinationPath('app.js')
    // );
    //
    // this.fs.copy(
    //   this.templatePath('bower.json'),
    //   this.destinationPath('bower.json')
    // );
    //
    // this.fs.copy(
    //   this.templatePath('gulpfile.js'),
    //   this.destinationPath('gulpfile.js')
    // );

    this.fs.copy(
      this.sourceRoot() + '/*',
      this.destinationRoot()
    );
  },
  install: function(){
    this.npmInstall(['gulp', 'browser-sync'], {'saveDev':true});
    this.bowerInstall(['angular'], {save:true});
  },
  end: function(){
    this.log("Done!")
    this.log("Use 'gulp serve' to start a developement webserver.");
  }
});
