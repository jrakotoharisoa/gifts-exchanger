"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function NotMyself(_a, _b) {
    var senderId = _a.id;
    var receiverId = _b.id;
    return senderId !== receiverId;
}
exports.NotMyself = NotMyself;
function NotSameGroup(_a, _b) {
    var senderGroup = _a.group;
    var receiverGroup = _b.group;
    return senderGroup !== receiverGroup;
}
exports.NotSameGroup = NotSameGroup;
function NotGiveToOldIfNew(_a, _b) {
    var senderType = _a.type;
    var receiverType = _b.type;
    if (senderType.toUpperCase() === 'NEW' && receiverType.toUpperCase() === 'OLD') {
        return false;
    }
    return true;
}
exports.NotGiveToOldIfNew = NotGiveToOldIfNew;
function NotGiveToNewIfOld(_a, _b) {
    var senderType = _a.type;
    var receiverType = _b.type;
    if (senderType.toUpperCase() === 'OLD' && receiverType.toUpperCase() === 'NEW') {
        return false;
    }
    return true;
}
exports.NotGiveToNewIfOld = NotGiveToNewIfOld;
//# sourceMappingURL=criteria.js.map