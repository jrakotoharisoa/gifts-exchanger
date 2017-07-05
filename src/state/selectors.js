"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExchanges = function (state) { return (state.exchanges); };
exports.getArrayOfParticipants = function (_a) {
    var participants = _a.participants;
    var arrayOfParticipants = [];
    for (var prop in participants) {
        arrayOfParticipants.push(participants[prop]);
    }
    return arrayOfParticipants;
};
//# sourceMappingURL=selectors.js.map