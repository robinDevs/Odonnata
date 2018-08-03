const config   = require('../appConfig.json');
const app = require('electron').app;
const path     = require('path');
const fs       = require('fs');

const default_path =  'app/';

let loadedRoute;

module.exports = {
    route: route
};

function route(route_path) {

    if(fs.existsSync(path.join(default_path, 'routes.json'))) {
         loadedRoute = JSON.parse(fs.readFileSync(path.join(default_path, 'routes.json'), 'utf8'));
    }

    let  router = _splitString(route_path, loadedRoute, ".")

    if(router === undefined) {
         router = route_path;
    }

    return router;
}

function _splitString(stringToSplit, json, separator) {
    let arrayOfStrings = stringToSplit.split(separator);

    let res = "";

    for (var i = 0; i < arrayOfStrings.length; i++){
        if (i == 0) {
            res = json[arrayOfStrings[i]];
        } else {
            res = res[arrayOfStrings[i]];
        }
    }

    return  _normalizeSlashes(app.getAppPath() + "\\" +  res);
}

function _normalizeSlashes(p){
    return p.replace(/\\/g, '/');
}