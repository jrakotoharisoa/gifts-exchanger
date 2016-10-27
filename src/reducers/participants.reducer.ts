import {
    ParticipantsAction,
    AddParticipantAction,
    EditParticipantAction,
    RemoveParticipantAction
} from '../actions/participants.action';
import { IParticipant } from '../model';

export type IParticipantsState =
    {
        [id: string]: IParticipant
    };

export function participantsReducer(state: IParticipantsState = {}, action: ParticipantsAction) {
    if (!action) {
        return state;
    }

    switch (action.type) {
        case 'ADD_PARTICIPANT':
            return AddParticipantReducer(state, action);
        case 'EDIT_PARTICIPANT':
            return EditParticipantReducer(state, action);
        case 'REMOVE_PARTICIPANT':
            return RemoveParticipantReducer(state, action);
        default:
            return state;
    }
}



function AddParticipantReducer(state: IParticipantsState = {}, action: AddParticipantAction) {
    return Object.assign(state, { [action.participant.id.toString()]: action.participant });
}

function EditParticipantReducer(state: IParticipantsState = {}, action: EditParticipantAction) {
    return Object.assign(state, {
        [action.id.toString()]: Object.assign(
            {},
            state[action.id.toString()],
            { [action.field]: action.value })
    });
}

function RemoveParticipantReducer(state: IParticipantsState = {}, action: RemoveParticipantAction) {
    const res = {};
    for (let prop in state) {
        if (prop !== action.id.toString()) {
            res[prop] = state[prop];
        }
    }
    return res;
}