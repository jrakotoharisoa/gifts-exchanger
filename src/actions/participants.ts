import { IParticipant } from '../model';

export type ParticipantsAction =
    AddParticipantAction
    | EditParticipantAction
    | RemoveParticipantAction
    | undefined;



// ----------------------------------------------------------------------------
export type AddParticipantAction = {
    type: 'ADD_PARTICIPANT';
};
export const createActionAddParticipant = (): AddParticipantAction =>
    ({
        type: 'ADD_PARTICIPANT'
    });

// ----------------------------------------------------------------------------
export type EditParticipantAction = {
    type: 'EDIT_PARTICIPANT';
    field: ('name' | 'group' | 'type');
    value: string,
    id: string
}

export const createActionEditParticipant = (id: string,
    field: ('name' | 'group' | 'type'),
    value: string): EditParticipantAction =>
    ({
        type: 'EDIT_PARTICIPANT',
        id: id,
        field: field,
        value: value
    });

// ----------------------------------------------------------------------------
export type RemoveParticipantAction = {
    type: 'REMOVE_PARTICIPANT';
    id: string
}

export const createActionRemoveParticipant = (id: string): RemoveParticipantAction =>
    ({
        type: 'REMOVE_PARTICIPANT',
        id: id
    });




