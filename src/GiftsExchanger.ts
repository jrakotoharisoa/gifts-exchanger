import { IParticipant, IGiftRelation, Criteria } from './model';

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
        this.participants.map((sender, index) => {
            const possibleReceivers: IParticipant[] = this.getDomain(sender);
            if (possibleReceivers.length > 0) {
                const randomIndex = getRandomInt(0, possibleReceivers.length);
                const {name: receiverName, id: receiverId} = possibleReceivers[randomIndex];
                this.relations.push({
                    sender: sender.name,
                    receiver: receiverName
                });
                this.availableParticipants = this.availableParticipants.filter(({ id }) => id !== receiverId);
            }
            else {
                this.relations.push({
                    sender: sender.name,
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

