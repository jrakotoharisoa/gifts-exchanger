import { IParticipant } from '../model';

export type ParticipantsAction =
    AddParticipantAction
    | EditParticipantAction
    | RemoveParticipantAction
    | undefined;



// ----------------------------------------------------------------------------
export type AddParticipantAction = {
    type: 'ADD_PARTICIPANT';
    participant: IParticipant
};
export function createActionAddParticipant(p: IParticipant): AddParticipantAction {
    return {
        type: 'ADD_PARTICIPANT',
        participant: p
    };
}

// ----------------------------------------------------------------------------
export type EditParticipantAction = {
    type: 'EDIT_PARTICIPANT';
    field: ('name' | 'group' | 'type');
    value: string,
    id: number
}

export function createActionEditParticipant(id: number, field: ('name' | 'group' | 'type'), value: string): EditParticipantAction {
    return {
        type: 'EDIT_PARTICIPANT',
        id: id,
        field: field,
        value: value
    };
}

// ----------------------------------------------------------------------------
export type RemoveParticipantAction = {
    type: 'REMOVE_PARTICIPANT';
    id: number
}

export function createActionRemoveParticipant(id: number): RemoveParticipantAction {
    return {
        type: 'REMOVE_PARTICIPANT',
        id: id
    };
}


