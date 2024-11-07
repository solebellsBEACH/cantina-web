'use client';
import { useAppDispatch, useAppSelector } from '@/app/core/store/hooks';
import { applicationSelectors } from '@/app/core/store/selectors/application';
import { applicationActions } from '@/app/core/store/slices/application';
import React from 'react'
import styled from 'styled-components';

export default function ProductModal() {
    const dispatch = useAppDispatch();
    const modalIsOpen = useAppSelector(applicationSelectors.selectModalIsOpen);

    if (!modalIsOpen) return <></>;

    const closeModal = () => {
        dispatch(applicationActions.setModalState());
    };

    return (
        <Backdrop onClick={closeModal}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                <h2>Modal Title</h2>
                <p>This is the modal content. Click outside to close.</p>
                <CloseButton onClick={closeModal}>Close</CloseButton>
            </ModalContainer>
        </Backdrop>
    );
}


const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 100%;
`;

const CloseButton = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #005bb5;
  }
`;