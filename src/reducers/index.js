"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var participants_1 = require("./participants");
var exchanges_1 = require("./exchanges");
__export(require("./participants"));
__export(require("./exchanges"));
exports.rootReducer = redux_1.combineReducers({
    participants: participants_1.participantsReducer,
    exchanges: exchanges_1.exchangesReducer
});
// Selector
exports.getArrayOfParticipants = function (state) { return (participants_1.getArrayOfParticipants(state.participants)); };
exports.getExchanges = function (state) { return (state.exchanges); };
//# sourceMappingURL=index.js.map