import { NotMyself, NotSameGroup, NotGiveToOldIfNew, NotGiveToNewIfOld } from './Criteria';
import { expect } from 'chai';
describe('Criteria', () => {

    describe('[ NotMyself ]', () => {
        it('should return false if participant have the same id', () => {
            // Given
            const sender = { id: '1', name: 'name', group: 'group', type: 'type' };
            const receiver = sender;
            // When
            const ok = NotMyself(sender, receiver);
            // Then
            expect(ok).to.be.false;
        });

        it('should return true if participant not have the same id', () => {
            // Given
            const sender = { id: '1', name: 'name', group: 'group', type: 'type' };
            const receiver = { id: '2', name: 'name', group: 'group', type: 'type' };
            // When
            const ok = NotMyself(sender, receiver);
            // Then
            expect(ok).to.be.true;
        });
    });

    describe('[ NotSameGroup ]', () => {
        it('should return false if participant have the same group', () => {
            // Given
            const sender = { id: '1', name: 'name', group: 'group', type: 'type' };
            const receiver = { id: '2', name: 'name', group: 'group', type: 'type' };
            // When
            const ok = NotSameGroup(sender, receiver);
            // Then
            expect(ok).to.be.false;
        });

        it('should return true if participant not have the same group', () => {
            // Given
            const sender = { id: '1', name: 'name', group: 'group1', type: 'type' };
            const receiver = { id: '2', name: 'name', group: 'group2', type: 'type' };
            // When
            const ok = NotSameGroup(sender, receiver);
            // Then
            expect(ok).to.be.true;
        });
    });

    describe('[ NotGiveToOldIfNew ]', () => {
        it('should return false if sender type is new and receiver type is Old', () => {
            // Given
            const sender = { id: '1', name: 'name', group: 'group1', type: 'NEW' };
            const receiver = { id: '2', name: 'name', group: 'group2', type: 'OLD' };
            // When
            const ok = NotGiveToOldIfNew(sender, receiver);
            // Then
            expect(ok).to.be.false;
        });

        it('should return true if sender type is new and receiver type is new', () => {
            // Given
            const sender = { id: '1', name: 'name', group: 'group1', type: 'NEW' };
            const receiver = { id: '2', name: 'name', group: 'group2', type: 'NEW' };
            // When
            const ok = NotGiveToOldIfNew(sender, receiver);
            // Then
            expect(ok).to.be.true;
        });

        it('should return true if sender type is new and receiver type is neutral', () => {
            // Given
            const sender = { id: '1', name: 'name', group: 'group1', type: 'NEW' };
            const receiver = { id: '2', name: 'name', group: 'group2', type: 'NEUTRAL' };
            // When
            const ok = NotGiveToOldIfNew(sender, receiver);
            // Then
            expect(ok).to.be.true;
        });

        it('should return true if sender is not new', () => {
            // Given
            const sender = { id: '1', name: 'name', group: 'group1', type: 'OLD' };
            const receiver = { id: '2', name: 'name', group: 'group2', type: 'NEUTRAL' };
            // When
            const ok = NotGiveToOldIfNew(sender, receiver);
            // Then
            expect(ok).to.be.true;
        });
    });

    describe('[ NotGiveToNewIfOld ]', () => {
        it('should return false if sender type is old and receiver type is new', () => {
            // Given
            const sender = { id: '1', name: 'name', group: 'group1', type: 'OLD' };
            const receiver = { id: '2', name: 'name', group: 'group2', type: 'NEW' };
            // When
            const ok = NotGiveToNewIfOld(sender, receiver);
            // Then
            expect(ok).to.be.false;
        });

        it('should return true if sender type is old and receiver type is old', () => {
            // Given
            const sender = { id: '1', name: 'name', group: 'group1', type: 'OLD' };
            const receiver = { id: '2', name: 'name', group: 'group2', type: 'OLD' };
            // When
            const ok = NotGiveToNewIfOld(sender, receiver);
            // Then
            expect(ok).to.be.true;
        });

        it('should return true if sender type is old and receiver type is neutral', () => {
            // Given
            const sender = { id: '1', name: 'name', group: 'group1', type: 'OLD' };
            const receiver = { id: '2', name: 'name', group: 'group2', type: 'NEUTRAL' };
            // When
            const ok = NotGiveToNewIfOld(sender, receiver);
            // Then
            expect(ok).to.be.true;
        });

        it('should return true if sender is not old', () => {
            // Given
            const sender = { id: '1', name: 'name', group: 'group1', type: 'NEW' };
            const receiver = { id: '2', name: 'name', group: 'group2', type: 'NEUTRAL' };
            // When
            const ok = NotGiveToOldIfNew(sender, receiver);
            // Then
            expect(ok).to.be.true;
        });
    });
});
