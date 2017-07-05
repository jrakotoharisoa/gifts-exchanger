"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createActionAddParticipant = function () {
    return ({
        type: 'ADD_PARTICIPANT'
    });
};
exports.createActionEditParticipant = function (id, field, value) {
    return ({
        type: 'EDIT_PARTICIPANT',
        id: id,
        field: field,
        value: value
    });
};
exports.createActionRemoveParticipant = function (id) {
    return ({
        type: 'REMOVE_PARTICIPANT',
        id: id
    });
};
//# sourceMappingURL=participants.js.map