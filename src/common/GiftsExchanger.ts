import { IParticipant, IGiftRelation, Criteria } from '../model';

export class GiftsExchanger {
    private participants: IParticipant[];
    private availableParticipants: IParticipant[];
    private criteria: Criteria[];
    private domains: {
        [s: string]: IParticipant[]
    };
    relations: IGiftRelation[];


    constructor(data: IParticipant[], criteria: Criteria[]) {
        const that = this;
        const dataToUSe = [].concat(data);
        shuffle(dataToUSe);
        this.availableParticipants = [].concat(dataToUSe);
        this.criteria = criteria;
        this.participants = [].concat(dataToUSe);
        this.relations = [];
        this.domains = this.getParticipantsDomain();
    }

    IsComplete() {
        return (this.participants.length === 0);
    }

    getParticipantsDomain() {
        let res = {};
        this.participants.map((p) => {
            const receivers: IParticipant[] = this.getReceiversFor(p);
            res[p.id] = receivers;
        });
        return res;
    }

    getParticipantToProces(): IParticipant {
        let sortedAvailable = this.participants.sort((a, b) => {
            const aDomainLength = this.domains[a.id].length;
            const bDomainLength = this.domains[b.id].length;
            return aDomainLength < bDomainLength ?
                -1 : aDomainLength > bDomainLength ?
                    1 : 0;
        });
        return sortedAvailable[0];
    }

    run() {
        if (this.IsComplete()) {
            return;
        }
        const sender = this.getParticipantToProces();
        const curParticipantDomain = this.domains[sender.id];
        if (curParticipantDomain.length === 0) {
            // TODO: should get back
            this.relations.push({
                sender: sender.name,
                receiver: 'UNKNOWN'
            });
            this.participants = this.participants.filter(({ id }) => id !== sender.id);
        }
        else {
            const randomIndex = getRandomInt(0, curParticipantDomain.length);
            const {name: receiverName, id: receiverId} = curParticipantDomain[randomIndex];
            this.relations.push({
                sender: sender.name,
                receiver: receiverName
            });
            this.availableParticipants = this.availableParticipants.filter(({ id }) => id !== receiverId);
            this.participants = this.participants.filter(({ id }) => id !== sender.id);
        }

        this.domains = this.getParticipantsDomain();
        this.run();
    }

    getReceiversFor(participant): IParticipant[] {
        const domain = this.availableParticipants
            .filter((p: IParticipant) => {
                for (let c of this.criteria) {
                    if (!c(participant, p)) {
                        return false;
                    }
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

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}
