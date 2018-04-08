const fs = require('fs');

module.exports = {
    readFileSync: function(path) {
        const file = fs.readFileSync(path, 'utf8');
        if (!file) {
            let name = file.split('.');
            name = name[name.length - 2];
            this.log.error(`Can not read file: ${name}`);
            return `//Can't read file ${name}`;
        }
        return file;
    },
};
