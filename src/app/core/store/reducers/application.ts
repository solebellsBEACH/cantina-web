interface ApplicationState {
    modalIsOpen: boolean;
}

export const initialState: ApplicationState = {
    modalIsOpen: false,
};

const reducers = {
    setModalState: (state: ApplicationState) => {
        state.modalIsOpen = !state.modalIsOpen
    },
    closeModal: (state: ApplicationState) => {
        state.modalIsOpen = false
    },
    openModal: (state: ApplicationState) => {
        state.modalIsOpen = true
    },

}

export default { reducers, initialState }