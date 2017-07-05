"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.ParticipantFormFieldsComponent = function (props) {
    return (React.createElement("div", { className: 'row' },
        React.createElement("div", { className: 'col-xs-4' },
            React.createElement("div", { className: 'form-group' },
                React.createElement("label", { htmlFor: 'nameInput' }, "Participant"),
                React.createElement("input", { id: 'nameInput', type: 'text', className: 'form-control', value: props.model.name, onChange: (function (e) { return props.handleFormField('name', e.target.value); }), placeholder: 'Prénom..' }))),
        React.createElement("div", { className: 'col-xs-4' },
            React.createElement("div", { className: 'form-group' },
                React.createElement("label", { htmlFor: 'groupInput' }, "Family"),
                React.createElement("input", { type: 'text', className: 'form-control', value: props.model.group, onChange: (function (e) { return props.handleFormField('group', e.target.value); }), id: 'groupInput', placeholder: 'Famille...' }))),
        React.createElement("div", { className: 'col-xs-3' },
            React.createElement("div", { className: 'form-group' },
                React.createElement("label", { htmlFor: 'typeInput' }, "Type"),
                React.createElement("select", { className: 'form-control', id: 'typeInput', value: props.model.type, onChange: (function (e) { return props.handleFormField('type', e.target.value); }) },
                    React.createElement("option", { value: 'NEUTRAL' }, "Cousin"),
                    React.createElement("option", { value: 'OLD' }, "Uncle/Aunt"),
                    React.createElement("option", { value: 'NEW' }, "Related")))),
        React.createElement("div", { className: 'col-xs-1 flex-xs-bottom', style: { marginBottom: '1rem' } },
            React.createElement("button", { type: 'button', className: 'btn btn-default', onClick: props.handleRemove },
                React.createElement("i", { className: 'fa fa-trash' })))));
};
//# sourceMappingURL=participantFormFields.js.map