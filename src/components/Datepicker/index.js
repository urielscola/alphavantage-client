import React from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';

import 'react-datepicker/dist/react-datepicker.css';
import { Container } from './styles';

registerLocale('pt-BR', ptBR);

const Picker = ({ label, minDate, maxDate, value = new Date(), onChange }) => {
  const handleChange = date => onChange(date);

  return (
    <Container data-testid="picker">
      {label}
      <DatePicker
        selected={value}
        minDate={minDate}
        maxDate={maxDate}
        onChange={handleChange}
        locale="pt-BR"
        dateFormat="dd/MM/yyyy"
      />
    </Container>
  );
};

export default Picker;
