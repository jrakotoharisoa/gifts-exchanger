import { ExchangesAction, GenerateAction } from '../actions';
import { IGifsExchange } from '../model';
import { GiftsExchanger } from '../common/GiftsExchanger';
import {
    NotMyself,
    NotSameGroup,
    NotGiveToOldIfNew,
    NotGiveToNewIfOld
} from '../common/criteria';
export type IExchangesState = IGifsExchange[];

const initialState: Array<IGifsExchange> = [];
export function exchangesReducer(
    state: IExchangesState = initialState,
    action: ExchangesAction|undefined) {
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
