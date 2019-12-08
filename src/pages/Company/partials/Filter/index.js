import React, { useState } from 'react';
import Datepicker from '../../../../components/Datepicker';
import Button from '../../../../components/Button';
import { Container } from './styles';

const Filter = ({
  onSubmit,
  initialDate = new Date(),
  lastDate = new Date()
}) => {
  const [startDate, setStartDate] = useState(initialDate);
  const [endDate, setEndDate] = useState(lastDate);

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({
      startDate: new Date(startDate).getTime(),
      endDate: new Date(endDate).getTime()
    });
  };

  return (
    <Container onSubmit={handleSubmit}>
      <div>
        <Datepicker
          label="Data inicial"
          value={startDate}
          minDate={new Date(lastDate)}
          maxDate={new Date(initialDate)}
          onChange={value => setStartDate(value)}
        />
        <Datepicker
          label="Data final"
          value={endDate}
          minDate={new Date(lastDate)}
          maxDate={new Date(initialDate)}
          onChange={value => setEndDate(value)}
        />
      </div>
      <Button label="Filtrar" primary />
    </Container>
  );
};

export default Filter;
