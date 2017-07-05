
// Selector
import {IAppState} from '.';
import {IParticipant} from '../model';

export const getExchanges = (state: IAppState) => (state.exchanges);
export const getArrayOfParticipants = ({participants}: IAppState): Array<IParticipant> => {
    const arrayOfParticipants = [];
    for (let prop in participants) {
        arrayOfParticipants.push(participants[prop]);
    }
    return arrayOfParticipants;
};
