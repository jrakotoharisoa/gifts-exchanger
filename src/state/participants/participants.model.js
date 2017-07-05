"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid = require("node-uuid");
var firstId = uuid.v1();
exports.initialParticipantsState = (_a = {},
    _a[firstId] = {
        id: firstId,
        name: '',
        group: '',
        type: 'NEUTRAL'
    },
    _a);
var _a;
//# sourceMappingURL=participants.model.js.map