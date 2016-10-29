import * as React from 'react';
import { IParticipant } from '../model';
import { IAppState } from '../reducers';
import { ParticipantFormFieldsComponent } from './participantFormFields';


export interface IEditionFormOwnProps {
    model: IParticipant;
}

export interface IEditionFormDispatchProps {
    onEditParticipant: (id: string, p: ('name' | 'group' | 'type'), v: string) => void;
}

export type IEditionFormProps = IEditionFormDispatchProps & IEditionFormOwnProps;

export class EditionFormComponent extends React.Component<IEditionFormProps, IParticipant> {
    constructor(props: IEditionFormProps) {
        super(props)
        this.state = props.model;
    }

    handleFormField(prop, value) {
        let stateDiff = {};
        stateDiff[prop] = value;
        this.setState(Object.assign(this.state, stateDiff));
        this.props.onEditParticipant(this.state.id, prop, value);
    }
    render() {
        return (
            <ParticipantFormFieldsComponent
                model={this.state}
                handleFormField={this.handleFormField.bind(this)}
                />
        );
    };
}
