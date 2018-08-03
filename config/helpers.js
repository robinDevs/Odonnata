const trans = require ('./helper/trans.js');
const router = require ('./helper/route.js');

module.exports = {
    lang: lang,
    route: route
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

/**
 * Give the file path by route
 *
 * @param route_path string
 *
 * @return string
 */
function route(route_path) {
    return router.route(route_path);
}


