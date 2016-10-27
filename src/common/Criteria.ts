import { IParticipant } from '../model';


export function NotMyself({id: senderId}: IParticipant, {id: receiverId}: IParticipant) {
    return senderId !== receiverId;
}

export function NotSameGroup({group: senderGroup}: IParticipant, {group: receiverGroup}: IParticipant) {
    return senderGroup !== receiverGroup;
}

export function NotGiveToOldIfNew({type: senderType}: IParticipant, {type: receiverType}: IParticipant) {
    if (senderType.toUpperCase() === 'NEW' && receiverType.toUpperCase() == 'OLD') {
        return false;
    }

    return true;
}

export function NotGiveToNewIfOld({type: senderType}: IParticipant, {type: receiverType}: IParticipant) {
    if (senderType.toUpperCase() === 'OLD' && receiverType.toUpperCase() == 'NEW') {
        return false;
    }

    return true;
}

