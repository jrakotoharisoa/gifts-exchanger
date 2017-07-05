import {connect} from 'react-redux';
import {EditionFormComponent, IEditionFormOwnProps, IEditionFormDispatchProps} from '../components/editionForm';
import {createActionEditParticipant, createActionRemoveParticipant} from '../state/participants';

export const EditionFormContainer = connect<any, IEditionFormDispatchProps, IEditionFormOwnProps>(
    (_, ownprops) => ownprops, {
        'onEditParticipant': createActionEditParticipant,
        'onRemoveParticipant': createActionRemoveParticipant
    })(EditionFormComponent);

