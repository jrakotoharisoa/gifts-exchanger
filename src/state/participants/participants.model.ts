import * as uuid from 'node-uuid';
import {IParticipant} from '../../model/index';

export type IParticipantsState = {
        [id: string]: IParticipant
    };

const firstId = uuid.v1();
export const initialParticipantsState = {
    [firstId]: {
        id: firstId,
        name: '',
        group: '',
        type: 'NEUTRAL'
    }
};
