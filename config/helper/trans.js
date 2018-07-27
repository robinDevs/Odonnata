const config   = require('../appConfig.json');
const path     = require('path');
const fs       = require('fs');

const default_path =  'resources/lang/';

let loadedLanguage;

module.exports = {
    trans: trans
};

function trans(lang_path) {

    if(fs.existsSync(path.join(default_path, config.localization + '.vendor.json'))) {
         loadedLanguage = JSON.parse(fs.readFileSync(path.join(default_path, config.localization + '.vendor.json'), 'utf8'));
    }
    else {
         loadedLanguage = JSON.parse(fs.readFileSync(path.join(default_path, 'fr.vendor.json'), 'utf8'));
    }

    let  translation = loadedLanguage[lang_path.toLowerCase()];

    if(translation === undefined) {
         translation = lang_path;
    }

    return translation;
}


