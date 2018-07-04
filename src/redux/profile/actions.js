import { createAction } from 'redux-act';

export const updateFieldValue = createAction('updateFieldValue');

export const submitProfileForm = createAction('submitProfileForm');
export const submitProfileFormSuccess = createAction('submitProfileFormSuccess');
export const submitProfileFormError = createAction('submitProfileFormError');

export const fillProfile = createAction('fillProfile');
