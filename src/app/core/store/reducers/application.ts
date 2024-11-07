import { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../services/api/products";

interface ApplicationState {
    modalIsOpen: boolean;
    modalData: Product | null
}

export const initialState: ApplicationState = {
    modalIsOpen: false,
    modalData: null
};

const reducers = {
    setModalState: (state: ApplicationState) => {
        state.modalIsOpen = !state.modalIsOpen
    },
    closeModal: (state: ApplicationState) => {
        state.modalIsOpen = false
        state.modalData = null
    },
    openModal: (state: ApplicationState, action: PayloadAction<any>) => {
        state.modalIsOpen = true;
        state.modalData = action.payload; // Armazena os dados passados ao abrir o modal
    },

}

export default { reducers, initialState }