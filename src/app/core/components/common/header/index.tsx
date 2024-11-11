"use client";
import { LocalStorageUtils } from '@/app/core/shared/utils/localStorage';
import { useState, useEffect } from 'react';
import { Container } from './styles';
import { Link } from '../Link';
import { IconButton } from '../Buttons/IconButton';
import { Button } from '../Buttons';
import { useAppDispatch } from '@/app/core/store/hooks';
import { fetchOrders, Order } from '@/app/core/store/reducers/orders';
import { useSelector } from 'react-redux';
import { selectOrders } from '@/app/core/store/selectors/orders';
import { RootState } from '@/app/core/store/store';
import styled from 'styled-components';
import { User } from '@/app/core/interfaces/entities/user';



export default function UserModal({ closeModal, modalData }: {
  closeModal: () => void, modalData: {
    orders: Order[],
    user: User | null
  }
}) {

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString(); // Formato: 'MM/DD/YYYY, HH:MM:SS AM/PM'
  };

  return (
    <Backdrop onClick={closeModal}>
      <ModalContainer className='rounded-xl bg-white m-2' onClick={(e: any) => e.stopPropagation()}>
        <div className="px-2">
          <div className="flex justify-between py-4 flex-col">
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                Olá {modalData.user?.name}
              </h3>
              <h4 className="text-sm text-primary">
                Email: {modalData.user?.email}
              </h4>
            </div>

            <div className='mt-3'>
              <h3>Suas Compras</h3>
              <section className='max-h-[60vh] overflow-auto'>
                {modalData.orders.map((item, index) => {
                  console.log(item)
                  return <div key={`order-item-${index}`} className="border p-4 rounded shadow-lg mb-4">
                    <h3 className="text-xl font-bold">Order ID: {item.id}</h3>
                    <p><strong>Date & Time:</strong> {formatDate(item.orderDateTime)}</p>
                    <p><strong>Product ID:</strong> {item.productId}</p>
                    <p><strong>Status:</strong> {item.status}</p>
                    <p><strong>QR Code:</strong> {item.qrCode}</p>
                    <p><strong>User ID:</strong> {item.userId}</p>
                  </div>
                })}
              </section>
            </div>
          </div>
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


export const Header: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const dispatch = useAppDispatch()
  const orders = useSelector((state: RootState) => selectOrders(state))
  const [modalData, setModalData] = useState<{
    orders: Order[],
    user: User | null
  } | null>(null)

  useEffect(() => {
    const userData = LocalStorageUtils.getUser();
    setUser(userData);

    dispatch(fetchOrders({
      userId: userData?.id
    }))
  }, []);

  const linkData = [
    // { label: 'Cantinas' },
    // { label: 'Faculdades' },
    {
      label: 'Suas compras', onClick: () => {
        console.log(orders)
        setModalData({
          orders,
          user
        })

      }
    },
  ];

  return (
    <>
      <Container className="flex justify-center items-center w-full bg-white py-3">
        <nav className="max-w-[85rem] w-full mx-auto px-4 flex justify-center items-center">
          <div id="hs-navbar-alignment" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2" aria-labelledby="hs-navbar-alignment-collapse">
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0">
              {linkData.map((item, index) => (
                <Link key={`header-link-${index}`} label={item.label} href="#" onClick={item.onClick} />
              ))}
              <IconButton onClick={() => { }} icon="search" isTransparent />
              <Button onClick={() => { }} icon="user" label={`Olá ${user?.name}`} isTransparent />
            </div>
          </div>
        </nav>
      </Container>

      {modalData && <UserModal modalData={modalData} closeModal={() => { setModalData(null) }} />}
    </>
  );
};
