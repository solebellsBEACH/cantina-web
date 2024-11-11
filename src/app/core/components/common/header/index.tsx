"use client";
import { LocalStorageUtils } from '@/app/core/shared/utils/localStorage';
import { useState, useEffect } from 'react';
import { Container } from './styles';
import { Link } from '../Link';
import { IconButton } from '../Buttons/IconButton';
import { Button } from '../Buttons';

export const Header: React.FC = () => {
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    const userData = LocalStorageUtils.getUser();
    setUser(userData);
  }, []);

  const linkData = [
    // { label: 'Cantinas' },
    // { label: 'Faculdades' },
    { label: 'Suas compras' },
  ];

  return (
    <Container className="flex justify-center items-center w-full bg-white py-3">
      <nav className="max-w-[85rem] w-full mx-auto px-4 flex justify-center items-center">
        <div id="hs-navbar-alignment" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2" aria-labelledby="hs-navbar-alignment-collapse">
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0">
            {linkData.map((item, index) => (
              <Link key={`header-link-${index}`} label={item.label} href="#" />
            ))}
            <IconButton onClick={() => { }} icon="search" isTransparent />
            <Button onClick={() => { }} icon="user" label={`Olá ${user?.name}`} isTransparent />
          </div>
        </div>
      </nav>
    </Container>
  );
};
