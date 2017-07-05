import {ParticipantsAction} from './participants';
import {ExchangesAction} from './exchanges';

export type Action =
    | ExchangesAction
    | ParticipantsAction;
