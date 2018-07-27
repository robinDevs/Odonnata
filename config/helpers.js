const trans = require ('./helper/trans.js');

module.exports = {
    lang: lang
};

/**
 * Give the translation by path
 *
 * @param lang_path string
 *
 * @return string
 */
function lang(lang_path) {
    return trans.trans(lang_path);
}

