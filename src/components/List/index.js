import React from 'react';
import { Label } from './styles';

const Group = ({ label, children }) => (
  <>
    <Label>{label}</Label>
    {children}
  </>
);

export default Group;
