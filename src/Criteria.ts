import { IParticipant } from './model';


export function NotMyself(sender: IParticipant, receiver: IParticipant) {
    return sender.id !== receiver.id;
}

export function NotSameGroup(sender: IParticipant, receiver: IParticipant) {
    return sender.group !== receiver.group;
}

export function NotGiveToOldIfNew(sender: IParticipant, receiver: IParticipant) {
    if (sender.type.toUpperCase() === 'NEW' && receiver.type.toUpperCase() == 'OLD') {
        return false;
    }

    return true;
}

export function NotGiveToNewIfOld(sender: IParticipant, receiver: IParticipant) {
    if (sender.type.toUpperCase() === 'OLD' && receiver.type.toUpperCase() == 'NEW') {
        return false;
    }

    return true;
}

