"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GiftsExchanger = (function () {
    function GiftsExchanger(data, criteria) {
        var dataToUSe = data.slice();
        shuffle(dataToUSe);
        this.availableParticipants = dataToUSe.slice();
        this.criteria = criteria;
        this.participants = dataToUSe.slice();
        this.relations = [];
        this.domains = this.getParticipantsDomain();
    }
    GiftsExchanger.prototype.IsComplete = function () {
        return (this.participants.length === 0);
    };
    GiftsExchanger.prototype.getParticipantsDomain = function () {
        var _this = this;
        var res = {};
        this.participants.map(function (p) {
            var receivers = _this.getReceiversFor(p);
            res[p.id] = receivers;
        });
        return res;
    };
    GiftsExchanger.prototype.getParticipantToProcess = function () {
        var _this = this;
        console.log(this.participants);
        var sortedAvailable = this.participants.sort(function (a, b) {
            var aDomain = _this.domains[a.id];
            var bDomain = _this.domains[b.id];
            var aDomainLength = aDomain && aDomain.length || 0;
            var bDomainLength = bDomain && bDomain.length || 0;
            return aDomainLength < bDomainLength ?
                -1 : aDomainLength > bDomainLength ?
                1 : 0;
        });
        return sortedAvailable[0];
    };
    GiftsExchanger.prototype.run = function () {
        if (this.IsComplete()) {
            return;
        }
        var sender = this.getParticipantToProcess();
        var curParticipantDomain = this.domains[sender.id];
        if (!curParticipantDomain || curParticipantDomain.length === 0) {
            // TODO: should get back
            this.relations.push({
                sender: sender.name,
                receiver: 'UNKNOWN'
            });
            this.participants = this.participants.filter(function (_a) {
                var id = _a.id;
                return id !== sender.id;
            });
        }
        else {
            var randomIndex = getRandomInt(0, curParticipantDomain.length);
            var _a = curParticipantDomain[randomIndex], receiverName = _a.name, receiverId_1 = _a.id;
            this.relations.push({
                sender: sender.name,
                receiver: receiverName
            });
            this.availableParticipants = this.availableParticipants.filter(function (_a) {
                var id = _a.id;
                return id !== receiverId_1;
            });
            this.participants = this.participants.filter(function (_a) {
                var id = _a.id;
                return id !== sender.id;
            });
        }
        this.domains = this.getParticipantsDomain();
        this.run();
    };
    GiftsExchanger.prototype.getReceiversFor = function (participant) {
        var _this = this;
        var domain = this.availableParticipants
            .filter(function (p) {
            for (var _i = 0, _a = _this.criteria; _i < _a.length; _i++) {
                var c = _a[_i];
                if (!c(participant, p)) {
                    return false;
                }
            }
            return true;
        });
        return domain;
    };
    GiftsExchanger.prototype.display = function () {
        this.relations.map(function (r) { return console.log(r.sender + " give gift to " + r.receiver); });
    };
    return GiftsExchanger;
}());
exports.GiftsExchanger = GiftsExchanger;
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function shuffle(a) {
    for (var i = a.length; i; i--) {
        var j = Math.floor(Math.random() * i);
        _a = [a[j], a[i - 1]], a[i - 1] = _a[0], a[j] = _a[1];
    }
    var _a;
}
//# sourceMappingURL=giftsExchanger.js.map