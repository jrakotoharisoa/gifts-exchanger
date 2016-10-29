import * as React from 'react';
import { connect } from 'react-redux';
import { IParticipant } from '../model';
import { IAppState } from '../reducers';
import { EditionFormComponent } from '../components/editionForm';
import { createActionEditParticipant } from '../actions';


function mapStateToProps(state, ownprops) {
    return ownprops;
}

function mapDispatchToProps(dispatch) {
    return {
        onEditParticipant: (
            id: string,
            p: ('name' | 'group' | 'type'),
            v: string) =>
            dispatch(createActionEditParticipant(id, p, v))
    };
}

export const EditionFormContainer = connect(mapStateToProps, mapDispatchToProps)(EditionFormComponent);

