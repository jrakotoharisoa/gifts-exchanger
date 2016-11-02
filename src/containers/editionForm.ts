import * as React from 'react';
import { connect } from 'react-redux';
import { IParticipant } from '../model';
import { IAppState } from '../reducers';
import { EditionFormComponent } from '../components/editionForm';
import { createActionEditParticipant, createActionRemoveParticipant } from '../actions';

export const EditionFormContainer = connect(
    (_, ownprops) => ownprops,
    {
        'onEditParticipant': createActionEditParticipant,
        'onRemoveParticipant': createActionRemoveParticipant
    }
)(EditionFormComponent);

