import { connect } from 'react-redux';
import { IAppState, getArrayOfParticipants, getExchanges } from '../reducers';
import { createActionGenerateExchange, createActionAddParticipant } from '../actions';
import { LayoutComponent } from '../components/layout';

const mapStateToProps = (state: IAppState) =>
    ({
        participants: getArrayOfParticipants(state),
        exchanges: getExchanges(state)
    });


export const BodyContainer = connect(mapStateToProps, {
    'onGenerationExchanges': createActionGenerateExchange,
    'onAddParticipants': createActionAddParticipant
})(LayoutComponent);

