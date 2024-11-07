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
}

export default { reducers, initialState }