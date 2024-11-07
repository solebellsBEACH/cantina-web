import { RootState } from '../store';

const selectApplication = (state: RootState) => state.application
const selectModalIsOpen = (state: RootState) => state.application.modalIsOpen;

export const applicationSelectors = {
    selectApplication,
    selectModalIsOpen
}