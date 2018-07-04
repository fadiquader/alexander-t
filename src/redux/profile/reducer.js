import { createReducer } from 'redux-act';
// project files
import * as actions from './actions';

const initialState = {
  submitting: false,
  error: null,
  firstName: '',
  lastName: '',
  company: '',
  department: '',
  position: '',
  email: ''
};

const profileReducer = createReducer({
  [actions.updateFieldValue]: (state, { key, value }) => ({
    ...state,
    [key]: value
  }),
  [actions.submitProfileForm]: (state, payload) => ({
    ...state,
    loading: true,
  }),
  [actions.fillProfile]: (state, payload) => ({
    ...state,
    ...payload,
    loading: false,
    error: null
  }),
  [actions.submitProfileFormError]: (state, payload) => ({
    ...state,
    loading: false,
    error: payload
  }),
}, initialState);

export default profileReducer;
