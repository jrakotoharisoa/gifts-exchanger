"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var editionForm_1 = require("../containers/editionForm");
exports.LayoutComponent = function (_a) {
    var participants = _a.participants, exchanges = _a.exchanges, onGenerationExchanges = _a.onGenerationExchanges, onAddParticipants = _a.onAddParticipants;
    var classResult = 'row' + (exchanges.length > 0 ? ' results' : '');
    return (React.createElement("div", { className: "container" },
        React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-md-12" },
                React.createElement("div", { className: "row" }, participants.map(function (p) {
                    return (React.createElement("div", { className: "col-xs-12", key: p.id },
                        React.createElement("form", null,
                            React.createElement(editionForm_1.EditionFormContainer, { model: p }))));
                })),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-xs-12", style: { textAlign: 'right' } },
                        React.createElement("button", { type: "button", onClick: function () { return onAddParticipants(); }, className: "btn btn-success" },
                            React.createElement("i", { className: "fa fa-plus fa-fw" }),
                            " ADD"),
                        React.createElement("button", { className: "btn btn-danger", style: { marginLeft: '5px' }, onClick: function () { return onGenerationExchanges(participants); }, disabled: participants.filter(function (p) { return p.name; }).length < 2 },
                            React.createElement("i", { className: "fa fa-random fa-fw" }),
                            " GO"))))),
        React.createElement("div", { className: classResult },
            React.createElement("div", { className: "col-md-10 offset-md-1" }, exchanges.map(function (_a, index) {
                var sender = _a.sender, receiver = _a.receiver;
                return (React.createElement("div", { key: index },
                    React.createElement("i", { className: "fa fa-gift" }),
                    " ",
                    sender + ' ',
                    "gives to ",
                    receiver));
            })))));
};
//# sourceMappingURL=layout.js.map