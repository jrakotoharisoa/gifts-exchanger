"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var uuid = require("node-uuid");
var firstId = uuid.v1();
var initialState = (_a = {},
    _a[firstId] = {
        id: firstId,
        name: '',
        group: '',
        type: 'NEUTRAL'
    },
    _a);
function participantsReducer(state, action) {
    if (state === void 0) { state = initialState; }
    if (!action) {
        return state;
    }
    switch (action.type) {
        case 'ADD_PARTICIPANT':
            return AddParticipantReducer(state, action);
        case 'EDIT_PARTICIPANT':
            return EditParticipantReducer(state, action);
        case 'REMOVE_PARTICIPANT':
            return RemoveParticipantReducer(state, action);
        default:
            return state;
    }
}
exports.participantsReducer = participantsReducer;
function AddParticipantReducer(state, _action) {
    if (state === void 0) { state = {}; }
    var initParticipant = {
        id: uuid.v1(),
        name: '',
        group: '',
        type: 'NEUTRAL'
    };
    return Object.assign({}, state, (_a = {}, _a[initParticipant.id] = initParticipant, _a));
    var _a;
}
function EditParticipantReducer(state, action) {
    if (state === void 0) { state = {}; }
    if (!state[action.id]) {
        return state;
    }
    var stateResult = Object.assign({}, state, (_a = {},
        _a[action.id] = Object.assign({}, state[action.id], (_b = {}, _b[action.field] = action.value, _b)),
        _a));
    return stateResult;
    var _a, _b;
}
function RemoveParticipantReducer(state, _a) {
    if (state === void 0) { state = {}; }
    var id = _a.id;
    var _b = id, toDelete = state[_b], result = __rest(state, [typeof _b === "symbol" ? _b : _b + ""]);
    return result;
}
// ------------------------------------------------------------------------------
// SELECTOR
exports.getArrayOfParticipants = function (participants) {
    var arrayOfParticipants = [];
    for (var prop in participants) {
        arrayOfParticipants.push(participants[prop]);
    }
    return arrayOfParticipants;
};
var _a;
//# sourceMappingURL=participants.js.map