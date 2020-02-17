import { CREATE_EVENT } from '../actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
    applicant: '',
    applicantDepartment: '',
    description: ''
});

const senderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_EVENT:
            return state.merge({ applicant: action.payload.applicant });
        default:
            return state;
    }
};

export const getApplicantState = (state) => state.sender.get('applicant');
export const getApplicantDepartmentState = (state) => state.sender.get('applicantDepartment');
export const getDescriptionState = (state) => state.sender.get('description');

export default senderReducer;