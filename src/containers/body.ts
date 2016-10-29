import { connect } from 'react-redux';
import { IAppState } from '../reducers';
import { createActionGenerateExchange, createActionAddParticipant } from '../actions';
import { IParticipant } from '../model';
import { LayoutComponent, ILayoutStateProps, ILayoutDispatchProps } from '../components/layout';

const mapStateToProps = ({participants, exchanges}, ownProps) => {
    const arrayOfParticipants = [];
    for (let prop in participants) {
        arrayOfParticipants.push(participants[prop]);
    }

    return {
        participants: arrayOfParticipants,
        exchanges: exchanges
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGenerationExchanges: (ps: IParticipant[]) => dispatch(createActionGenerateExchange(ps)),
        onAddParticipants: () => dispatch(createActionAddParticipant())
    };
};

export const BodyContainer = connect(mapStateToProps, mapDispatchToProps)(LayoutComponent);
