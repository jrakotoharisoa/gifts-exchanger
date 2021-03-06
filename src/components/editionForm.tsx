import * as React from 'react';
import { IParticipant } from '../model';
import { ParticipantFormFieldsComponent } from './participantFormFields';


export interface IEditionFormOwnProps {
    model: IParticipant;
}

export interface IEditionFormDispatchProps {
    onEditParticipant: (id: string, p: ('name' | 'group' | 'type'), v: string) => void;
    onRemoveParticipant: (id: string) => void;
}

export type IEditionFormProps = IEditionFormDispatchProps & IEditionFormOwnProps;

export class EditionFormComponent extends React.Component<IEditionFormProps, IParticipant> {
    constructor(props: IEditionFormProps) {
        super(props);
        this.state = props.model;
    }

    handleFormField(prop: ('name' | 'group' | 'type'), value: string) {
        let stateDiff = {
            [prop]: value
        };
        this.setState(Object.assign(this.state, stateDiff));
        this.props.onEditParticipant(this.state.id, prop, value);
    }
    handleRemove() {
        this.props.onRemoveParticipant(this.state.id);
    }
    render() {
        return (
            <ParticipantFormFieldsComponent
                model={this.state}
                handleFormField={this.handleFormField.bind(this)}
                handleRemove={this.handleRemove.bind(this)}
                />
        );
    }
}
