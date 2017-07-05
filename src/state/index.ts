import {IParticipantsState} from './participants';
import {IExchangesState} from './exchanges';

export interface IAppState {
    participants: IParticipantsState;
    exchanges: IExchangesState;
}
