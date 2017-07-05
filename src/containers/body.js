"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var reducers_1 = require("../reducers");
var actions_1 = require("../actions");
var layout_1 = require("../components/layout");
var mapStateToProps = function (state) {
    return ({
        participants: reducers_1.getArrayOfParticipants(state),
        exchanges: reducers_1.getExchanges(state)
    });
};
exports.BodyContainer = react_redux_1.connect(mapStateToProps, {
    'onGenerationExchanges': actions_1.createActionGenerateExchange,
    'onAddParticipants': actions_1.createActionAddParticipant
})(layout_1.LayoutComponent);
//# sourceMappingURL=body.js.map