import { IParticipant, IGiftRelation, Criteria } from './model';
import * as Q from 'q';

export class GiftsExchanger {
    private participants: IParticipant[];
    private availableParticipants: IParticipant[];
    relations: IGiftRelation[];
    private criteria: Criteria[];

    constructor(data: IParticipant[], criteria: Criteria[]) {
        this.participants = data;
        this.availableParticipants = data;
        this.relations = [];
        this.criteria = criteria;
    }

    run() {
        this.participants.map((value, index) => {
            const possibleReceivers: IParticipant[] = this.getDomain(value);
            if (possibleReceivers.length > 0) {
                const randomIndex = getRandomInt(0, possibleReceivers.length);
                const receiver = possibleReceivers[randomIndex];
                this.relations.push({
                    sender: value.name,
                    receiver: receiver.name
                });
                this.availableParticipants = this.availableParticipants.filter(p => p.id !== receiver.id);
            }
            else {
                this.relations.push({
                    sender: value.name,
                    receiver: "UNKNOWN"
                });
            }

        });
    }

    getDomain(participant): IParticipant[] {
        const domain = this.availableParticipants
            .filter((p: IParticipant) => {
                for (let c of this.criteria) {
                    if (!c(participant, p))
                        return false;
                }
                return true;
            });
        return domain;
    }

    display() {
        this.relations.map(r => console.log(`${r.sender} give gift to ${r.receiver}`));
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

