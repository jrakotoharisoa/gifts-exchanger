import {
    ParticipantsAction,
    AddParticipantAction,
    EditParticipantAction,
    RemoveParticipantAction
} from '../actions';
import { IParticipant } from '../model';
import * as uuid from 'node-uuid';
export type IParticipantsState =
    {
        [id: string]: IParticipant
    };

const firstId = uuid.v1();
const initialState = {
    [firstId]: {
        id: firstId,
        name: '',
        group: '',
        type: 'NEUTRAL'
    }
};
export function participantsReducer(state: IParticipantsState = initialState, action: ParticipantsAction) {
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

function RemoveParticipantReducer(state: IParticipantsState = {}, action: RemoveParticipantAction) {
    const res = {};
    for (let prop in state) {
        if (prop !== action.id.toString()) {
            res[prop] = state[prop];
        }
    }
    return res;
}
