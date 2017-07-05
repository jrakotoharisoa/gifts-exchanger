"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GiftsExchanger_1 = require("../../common/GiftsExchanger");
var criteria_1 = require("../../common/criteria");
var exchanges_model_1 = require("./exchanges.model");
function exchangesReducer(state, action) {
    if (state === void 0) { state = exchanges_model_1.initialExchangesState; }
    if (!action) {
        return state;
    }
    switch (action.type) {
        case 'GENERATE_EXCHANGE':
            return generateExchangeReducer(state, action);
        default:
            return state;
    }
}
exports.exchangesReducer = exchangesReducer;
function generateExchangeReducer(_state, _a) {
    var participants = _a.participants;
    var exchanger = new GiftsExchanger_1.GiftsExchanger(participants.filter(function (p) { return p.name; }), [
        criteria_1.NotMyself,
        criteria_1.NotSameGroup,
        criteria_1.NotGiveToOldIfNew,
        criteria_1.NotGiveToNewIfOld
    ]);
    exchanger.run();
    return exchanger.relations;
}
//# sourceMappingURL=exchanges.reducer.js.map