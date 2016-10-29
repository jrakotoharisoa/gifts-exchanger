import * as React from 'react';
import { IParticipant, IGifsExchange } from '../model';
import { EditionFormContainer } from '../containers/editionForm';
// ------------------------------------------------
export interface ILayoutStateProps {
    participants: IParticipant[];
    exchanges: IGifsExchange[];
}

// ------------------------------------------------
export interface ILayoutDispatchProps {
    onGenerationExchanges: (ps: IParticipant[]) => void;
    onAddParticipants: () => void;
}


export type ILayoutProps = ILayoutStateProps & ILayoutDispatchProps;

export const LayoutComponent = function ({
    participants,
    exchanges,
    onGenerationExchanges,
    onAddParticipants
}: ILayoutProps) {

    const classResult = 'row' + (exchanges.length > 0 ? ' results' : '');
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='row'>
                        {
                            participants.map((p) => {
                                return (
                                    <div className='col-xs-12' key={p.id}>
                                        <form>
                                            <EditionFormContainer model={p} />
                                        </form>
                                    </div>);
                            })
                        }
                    </div>
                    <div className='row'>
                        <div className='col-xs-12' style={{ textAlign: 'right' }}>
                            <button
                                type='button'
                                onClick={() => onAddParticipants()}
                                className='btn btn-success' >
                                <i className='fa fa-plus fa-fw'></i> ADD
                            </button>
                            <button className='btn btn-danger'
                                style={{ marginLeft: '5px' }}
                                onClick={(e) => onGenerationExchanges(participants)}
                                disabled={participants.filter(p => p.name).length < 2}>
                                <i className='fa fa-random fa-fw'></i> GO
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classResult}>
                <div className='col-md-10 offset-md-1'>
                    {
                        exchanges.map(({sender, receiver}, index) => {
                            return (
                                <div key={index}>
                                    <i className='fa fa-gift'></i> {sender + ' '}gives to {receiver}
                                </div>);
                        })
                    }
                </div>
            </div>
        </div >
    );
};
