'use client';
import React from 'react';
import { Container } from './styles';
import { Button } from '../Buttons';

export const Header: React.FC = () => {
  return (
    <Container className="text-background-color p-4">
      <Button label='Button' onClick={() => { }} />
    </Container>
  );
}