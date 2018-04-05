const fs = require('fs');
const path = require('path');

module.exports = {
  dirCreate: function(dir) {
    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
      this.log.info('Folder created');
    }
  },
  dirRead: function(dir) {
    let files = [];
    fs.readdirSync(dir).forEach(element => {
      //element is file
      if (element.indexOf('.') > -1) {
        files.push({
          type: 'file',
          name: element,
          path: path.join(dir, element),
        });
      }
      //element is dir
      else {
        const newFile = element;
        const subDir = path.join(dir, element);
        files.push({
          type: 'subFile',
          name: `${element}.js`,
          files: this.dirRead(subDir),
        });
      }
    });
    return files;
  },
  dirBuild: function(files, dir) {
    let fileStrings = [];
    files.forEach(file => {
      if (file.type === 'file') {
        fileStrings.push({
          name: file.name,
          content: this.readFileSync(file.path),
        });
      } else {
        fileStrings.push({
          name: file.name,
          content: this.dirWrapFiles(this.dirMergeFiles(file.files))
        });
      }
    });

    this.dirCreate(dir);
    
    fileStrings.forEach(file => {
      this.writeFileSync(path.join(dir,file.name), file.content);
    });
    this.log.info('Building files complete');
  },
  dirMergeFiles: function(arr) {
    let files = [];
    arr.forEach(file => {
      if (file.type === 'file') {
        files.push(this.readFileSync(file.path));
      } else {
        files.push(this.dirMergeFiles(file.files));
      }
    });
    files = files.join('\n');
    return files;
  },
  dirWrapFiles: function(string) {
    let newString = [
      'module.exports = {',
      string,
      '};'
    ];
    return newString.join('\n');
  },
};
