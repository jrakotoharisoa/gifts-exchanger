import { connect } from 'react-redux';
import { IAppState, getArrayOfParticipants, getExchanges } from '../reducers';
import { createActionGenerateExchange, createActionAddParticipant } from '../actions';
import { IParticipant } from '../model';
import { LayoutComponent, ILayoutStateProps, ILayoutDispatchProps } from '../components/layout';

const mapStateToProps = (state, ownProps) =>
    ({
        participants: getArrayOfParticipants(state),
        exchanges: getExchanges(state)
    });


export const BodyContainer = connect(mapStateToProps, {
    'onGenerationExchanges': createActionGenerateExchange,
    'onAddParticipants': createActionAddParticipant
})(LayoutComponent);

