"use strict";
exports.__esModule = true;
function shuffleAssets(assets) {
    var _a;
    var currentPosition = assets.length, randomIndex;
    // While there remain elements to shuffle...
    while (currentPosition != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentPosition);
        currentPosition--;
        // And swap it with the current element.
        _a = [
            assets[randomIndex],
            assets[currentPosition],
        ], assets[currentPosition] = _a[0], assets[randomIndex] = _a[1];
    }
    return assets;
}
exports["default"] = shuffleAssets;
