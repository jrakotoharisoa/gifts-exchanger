import { connect } from 'react-redux';
import { LayoutComponent } from '../components/layout';
import {createActionGenerateExchange} from '../state/exchanges';
import {createActionAddParticipant} from '../state/participants';
import {IAppState} from '../state';
import {getArrayOfParticipants, getExchanges} from '../state/selectors';

const mapStateToProps = (state: IAppState) =>
    ({
        participants: getArrayOfParticipants(state),
        exchanges: getExchanges(state)
    });


export const BodyContainer = connect(mapStateToProps, {
    'onGenerationExchanges': createActionGenerateExchange,
    'onAddParticipants': createActionAddParticipant
})(LayoutComponent);

