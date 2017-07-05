import { IParticipant, IGifsExchange, Criteria } from '../model';

export class GiftsExchanger {
    private participants: IParticipant[];
    private availableParticipants: IParticipant[];
    private criteria: Criteria[];
    private domains: {
        [s: string]: IParticipant[]
    };
    relations: IGifsExchange[];


    constructor(data: IParticipant[], criteria: Criteria[]) {
        const dataToUSe = [...data];
        shuffle(dataToUSe);
        this.availableParticipants = [...dataToUSe];
        this.criteria = criteria;
        this.participants = [...dataToUSe];
        this.relations = [];
        this.domains = this.getParticipantsDomain();
    }

    IsComplete() {
        return (this.participants.length === 0);
    }

    getParticipantsDomain() {
        let res: {[key: string]: IParticipant[]} = {};
        this.participants.map((p) => {
            const receivers: IParticipant[] = this.getReceiversFor(p);
            res[p.id] = receivers;
        });
        return res;
    }

    getParticipantToProcess(): IParticipant {
        console.log(this.participants);
        let sortedAvailable = this.participants.sort((a, b) => {
            const aDomain = this.domains[a.id];
            const bDomain = this.domains[b.id];
            const aDomainLength = aDomain && aDomain.length || 0;
            const bDomainLength = bDomain && bDomain.length || 0;
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
        const sender = this.getParticipantToProcess();
        const curParticipantDomain = this.domains[sender.id];
        if (!curParticipantDomain || curParticipantDomain.length === 0) {
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

    getReceiversFor(participant: IParticipant): IParticipant[] {
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

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function shuffle(a: any[]) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}
