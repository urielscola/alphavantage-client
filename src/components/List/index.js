import React from 'react';
import { Label } from './styles';

const Group = ({ label, children }) => (
  <div data-testid="list">
    <Label>{label}</Label>
    {children}
  </div>
);

export default Group;
