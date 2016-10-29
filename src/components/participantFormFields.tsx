import * as React from 'react';
import { IParticipant } from '../model';
export interface IParticipantFormProps {
    model: IParticipant;
    handleFormField: (p: string, v: string) => void;
}

export const ParticipantFormFieldsComponent = (props: IParticipantFormProps) => {
    return (
        <div className='row'>
            <div className='col-xs-4'>
                <div className='form-group'>
                    <label htmlFor='nameInput'>Participant</label>
                    <input id='nameInput'
                        type='text'
                        className='form-control'
                        value={props.model.name}
                        onChange={((e) => props.handleFormField('name', e.target.value))}
                        placeholder='Prénom..' />
                </div>
            </div>
            <div className='col-xs-4'>
                <div className='form-group'>
                    <label htmlFor='groupInput'>Famille</label>
                    <input type='text'
                        className='form-control'
                        value={props.model.group}
                        onChange={((e) => props.handleFormField('group', e.target.value))}
                        id='groupInput'
                        placeholder='Famille...' />
                </div>
            </div>
            <div className='col-xs-4'>
                <div className='form-group'>
                    <label htmlFor='typeInput'>Catégorie</label>
                    <select
                        className='form-control'
                        id='typeInput'
                        value={props.model.type}
                        onChange={((e) => props.handleFormField('type', e.target.value))}
                        >
                        <option value='NEUTRAL'>Cousin(e)</option>
                        <option value='OLD'>Oncle/Tante</option>
                        <option value='NEW'>Apparenté(e)</option>
                    </select>
                </div>
            </div>
        </div>
    );
};
