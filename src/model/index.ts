export interface IParticipant {
    id: number;
    name: string;
    group: string;
    type: string;
}

export interface IRelations {
    [key: number]: IGiftRelation;
}

export interface IGiftRelation {
    sender: string;
    receiver: string;
}

export type Criteria = (sender: IParticipant, receiver: IParticipant) => boolean;
