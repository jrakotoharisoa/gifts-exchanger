
import * as uuid from 'node-uuid';
import {Action} from '../actions';
import {initialParticipantsState, IParticipantsState} from './participants.model';
import {AddParticipantAction, EditParticipantAction, RemoveParticipantAction} from './participants.action';

export function participantsReducer(state: IParticipantsState = initialParticipantsState, action: Action) {
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



function AddParticipantReducer(state: IParticipantsState = {}, _action: AddParticipantAction) {
    let initParticipant = {
        id: uuid.v1(),
        name: '',
        group: '',
        type: 'NEUTRAL'
    };

    return Object.assign({}, state, { [initParticipant.id]: initParticipant });
}

function EditParticipantReducer(state: IParticipantsState = {}, action: EditParticipantAction) {
    if (!state[action.id]) {
        return state;
    }
    const stateResult = Object.assign({}, state, {
        [action.id]: Object.assign(
            {},
            state[action.id],
            { [action.field]: action.value })
    });

    return stateResult;
}

function RemoveParticipantReducer(state: IParticipantsState = {}, {id}: RemoveParticipantAction): IParticipantsState {
    const {[id]: toDelete , ...result} = state;
    return result;
}


