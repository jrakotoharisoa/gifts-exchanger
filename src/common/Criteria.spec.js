"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Criteria_1 = require("./Criteria");
describe('Criteria', function () {
    describe('[ NotMyself ]', function () {
        it('should return false if participant have the same id', function () {
            // Given
            var sender = { id: '1', name: 'name', group: 'group', type: 'type' };
            var receiver = sender;
            // When
            var ok = Criteria_1.NotMyself(sender, receiver);
            // Then
            expect(ok).toBeFalsy();
        });
        it('should return true if participant not have the same id', function () {
            // Given
            var sender = { id: '1', name: 'name', group: 'group', type: 'type' };
            var receiver = { id: '2', name: 'name', group: 'group', type: 'type' };
            // When
            var ok = Criteria_1.NotMyself(sender, receiver);
            // Then
            expect(ok).toBeTruthy();
        });
    });
    describe('[ NotSameGroup ]', function () {
        it('should return false if participant have the same group', function () {
            // Given
            var sender = { id: '1', name: 'name', group: 'group', type: 'type' };
            var receiver = { id: '2', name: 'name', group: 'group', type: 'type' };
            // When
            var ok = Criteria_1.NotSameGroup(sender, receiver);
            // Then
            expect(ok).toBeFalsy();
        });
        it('should return true if participant not have the same group', function () {
            // Given
            var sender = { id: '1', name: 'name', group: 'group1', type: 'type' };
            var receiver = { id: '2', name: 'name', group: 'group2', type: 'type' };
            // When
            var ok = Criteria_1.NotSameGroup(sender, receiver);
            // Then
            expect(ok).toBeTruthy();
        });
    });
    describe('[ NotGiveToOldIfNew ]', function () {
        it('should return false if sender type is new and receiver type is Old', function () {
            // Given
            var sender = { id: '1', name: 'name', group: 'group1', type: 'NEW' };
            var receiver = { id: '2', name: 'name', group: 'group2', type: 'OLD' };
            // When
            var ok = Criteria_1.NotGiveToOldIfNew(sender, receiver);
            // Then
            expect(ok).toBeFalsy();
        });
        it('should return true if sender type is new and receiver type is new', function () {
            // Given
            var sender = { id: '1', name: 'name', group: 'group1', type: 'NEW' };
            var receiver = { id: '2', name: 'name', group: 'group2', type: 'NEW' };
            // When
            var ok = Criteria_1.NotGiveToOldIfNew(sender, receiver);
            // Then
            expect(ok).toBeTruthy();
        });
        it('should return true if sender type is new and receiver type is neutral', function () {
            // Given
            var sender = { id: '1', name: 'name', group: 'group1', type: 'NEW' };
            var receiver = { id: '2', name: 'name', group: 'group2', type: 'NEUTRAL' };
            // When
            var ok = Criteria_1.NotGiveToOldIfNew(sender, receiver);
            // Then
            expect(ok).toBeTruthy();
        });
        it('should return true if sender is not new', function () {
            // Given
            var sender = { id: '1', name: 'name', group: 'group1', type: 'OLD' };
            var receiver = { id: '2', name: 'name', group: 'group2', type: 'NEUTRAL' };
            // When
            var ok = Criteria_1.NotGiveToOldIfNew(sender, receiver);
            // Then
            expect(ok).toBeTruthy();
        });
    });
    describe('[ NotGiveToNewIfOld ]', function () {
        it('should return false if sender type is old and receiver type is new', function () {
            // Given
            var sender = { id: '1', name: 'name', group: 'group1', type: 'OLD' };
            var receiver = { id: '2', name: 'name', group: 'group2', type: 'NEW' };
            // When
            var ok = Criteria_1.NotGiveToNewIfOld(sender, receiver);
            // Then
            expect(ok).toBeFalsy();
        });
        it('should return true if sender type is old and receiver type is old', function () {
            // Given
            var sender = { id: '1', name: 'name', group: 'group1', type: 'OLD' };
            var receiver = { id: '2', name: 'name', group: 'group2', type: 'OLD' };
            // When
            var ok = Criteria_1.NotGiveToNewIfOld(sender, receiver);
            // Then
            expect(ok).toBeTruthy();
        });
        it('should return true if sender type is old and receiver type is neutral', function () {
            // Given
            var sender = { id: '1', name: 'name', group: 'group1', type: 'OLD' };
            var receiver = { id: '2', name: 'name', group: 'group2', type: 'NEUTRAL' };
            // When
            var ok = Criteria_1.NotGiveToNewIfOld(sender, receiver);
            // Then
            expect(ok).toBeTruthy();
        });
        it('should return true if sender is not old', function () {
            // Given
            var sender = { id: '1', name: 'name', group: 'group1', type: 'NEW' };
            var receiver = { id: '2', name: 'name', group: 'group2', type: 'NEUTRAL' };
            // When
            var ok = Criteria_1.NotGiveToOldIfNew(sender, receiver);
            // Then
            expect(ok).toBeTruthy();
        });
    });
});
//# sourceMappingURL=Criteria.spec.js.map