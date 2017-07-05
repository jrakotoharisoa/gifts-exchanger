"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var app_1 = require("./app");
var react_redux_1 = require("react-redux");
exports.RootComponent = function (_a) {
    var store = _a.store;
    return (React.createElement(react_redux_1.Provider, { store: store },
        React.createElement(app_1.AppComponent, null)));
};
//# sourceMappingURL=root.js.map