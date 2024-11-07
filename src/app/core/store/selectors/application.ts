import { RootState } from '../store';

const selectApplication = (state: RootState) => state.application
const selectModalIsOpen = (state: RootState) => state.application.modalIsOpen;
const selectModalData = (state: RootState) => state.application.modalData;

export const applicationSelectors = {
    selectApplication,
    selectModalIsOpen,
    selectModalData
}