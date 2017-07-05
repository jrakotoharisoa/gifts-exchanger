"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var reducers_1 = require("./reducers");
var store = redux_1.createStore(reducers_1.rootReducer, (window.__REDUX_DEVTOOLS_EXTENSION__) && window.__REDUX_DEVTOOLS_EXTENSION__());
exports.configureStore = function () { return store; };
//# sourceMappingURL=configureStore.js.map