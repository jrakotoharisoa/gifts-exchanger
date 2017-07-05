"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var editionForm_1 = require("../components/editionForm");
var actions_1 = require("../actions");
exports.EditionFormContainer = react_redux_1.connect(function (_, ownprops) { return ownprops; }, {
    'onEditParticipant': actions_1.createActionEditParticipant,
    'onRemoveParticipant': actions_1.createActionRemoveParticipant
})(editionForm_1.EditionFormComponent);
//# sourceMappingURL=editionForm.js.map