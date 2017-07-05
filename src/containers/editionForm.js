"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var editionForm_1 = require("../components/editionForm");
var participants_1 = require("../state/participants");
exports.EditionFormContainer = react_redux_1.connect(function (_, ownprops) { return ownprops; }, {
    'onEditParticipant': participants_1.createActionEditParticipant,
    'onRemoveParticipant': participants_1.createActionRemoveParticipant
})(editionForm_1.EditionFormComponent);
//# sourceMappingURL=editionForm.js.map