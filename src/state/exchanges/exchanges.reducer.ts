import { GiftsExchanger } from '../../common/GiftsExchanger';
import {
    NotMyself,
    NotSameGroup,
    NotGiveToOldIfNew,
    NotGiveToNewIfOld
} from '../../common/criteria';
import {Action} from '../actions';
import {initialExchangesState, IExchangesState} from './exchanges.model';
import {GenerateAction} from './exchanges.action';

export function exchangesReducer(
    state: IExchangesState = initialExchangesState,
    action: Action) {

    if (!action) {
        return state;
    }

    switch (action.type) {
        case 'GENERATE_EXCHANGE':
            return generateExchangeReducer(state, action);
        default:
            return state;
    }
}

function generateExchangeReducer(_state: IExchangesState, {participants}: GenerateAction) {
    const exchanger = new GiftsExchanger(
        participants.filter(p => p.name),
        [
            NotMyself,
            NotSameGroup,
            NotGiveToOldIfNew,
            NotGiveToNewIfOld
        ]);
    exchanger.run();
    return exchanger.relations;
}
