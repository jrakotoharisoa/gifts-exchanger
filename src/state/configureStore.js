"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var participants_1 = require("./participants");
var redux_2 = require("redux");
var exchanges_1 = require("./exchanges");
var rootReducer = redux_2.combineReducers({
    participants: participants_1.participantsReducer,
    exchanges: exchanges_1.exchangesReducer
});
var store = redux_1.createStore(rootReducer, (window.__REDUX_DEVTOOLS_EXTENSION__) && window.__REDUX_DEVTOOLS_EXTENSION__());
exports.configureStore = function () { return store; };
//# sourceMappingURL=configureStore.js.map