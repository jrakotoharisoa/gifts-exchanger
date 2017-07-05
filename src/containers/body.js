"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var layout_1 = require("../components/layout");
var exchanges_1 = require("../state/exchanges");
var participants_1 = require("../state/participants");
var selectors_1 = require("../state/selectors");
var mapStateToProps = function (state) {
    return ({
        participants: selectors_1.getArrayOfParticipants(state),
        exchanges: selectors_1.getExchanges(state)
    });
};
exports.BodyContainer = react_redux_1.connect(mapStateToProps, {
    'onGenerationExchanges': exchanges_1.createActionGenerateExchange,
    'onAddParticipants': participants_1.createActionAddParticipant
})(layout_1.LayoutComponent);
//# sourceMappingURL=body.js.map