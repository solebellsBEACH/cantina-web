'use client';
import { useAppDispatch, useAppSelector } from '@/app/core/store/hooks';
import { applicationSelectors } from '@/app/core/store/selectors/application';
import { applicationActions } from '@/app/core/store/slices/application';
import React from 'react'
import styled from 'styled-components';
import { Button } from '../../common/Buttons';

export default function ProductModal() {
  const dispatch = useAppDispatch();
  const modalIsOpen = useAppSelector(applicationSelectors.selectModalIsOpen);
  const modalModalData = useAppSelector(applicationSelectors.selectModalData);

  if (!modalIsOpen || !modalModalData) return <></>;

  const closeModal = () => {
    dispatch(applicationActions.closeModal());
  };

  const handleBuyButton = () => {
    closeModal()
  }

  return (
    <Backdrop onClick={closeModal}>
      <ModalContainer className='rounded-xl bg-white m-2' onClick={(e) => e.stopPropagation()}>
        <img className="h-100 rounded-t-xl w-full" alt="Card Image" src={modalModalData.image_url} />
        <div className="px-2">
          <div className="flex justify-between py-4">
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                {modalModalData.name}
              </h3>
              <h4 className="text-sm text-primary">
                Cantina {modalModalData.establishmentId}
              </h4>
              <h5>{modalModalData.description}</h5>
            </div>
            <h4>{modalModalData.price}</h4>
          </div>
          <Button label="Comprar" className="w-full justify-center flex" onClick={handleBuyButton} />
        </div>
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