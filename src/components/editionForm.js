"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var participantFormFields_1 = require("./participantFormFields");
var EditionFormComponent = (function (_super) {
    __extends(EditionFormComponent, _super);
    function EditionFormComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = props.model;
        return _this;
    }
    EditionFormComponent.prototype.handleFormField = function (prop, value) {
        var stateDiff = (_a = {},
            _a[prop] = value,
            _a);
        this.setState(Object.assign(this.state, stateDiff));
        this.props.onEditParticipant(this.state.id, prop, value);
        var _a;
    };
    EditionFormComponent.prototype.handleRemove = function () {
        this.props.onRemoveParticipant(this.state.id);
    };
    EditionFormComponent.prototype.render = function () {
        return (React.createElement(participantFormFields_1.ParticipantFormFieldsComponent, { model: this.state, handleFormField: this.handleFormField.bind(this), handleRemove: this.handleRemove.bind(this) }));
    };
    return EditionFormComponent;
}(React.Component));
exports.EditionFormComponent = EditionFormComponent;
//# sourceMappingURL=editionForm.js.map