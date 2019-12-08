import React, { useState } from 'react';
import InputField from '../../../../components/InputField';
import Button from '../../../../components/Button';
import { Container } from './styles';

const Search = ({ onSubmit }) => {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setKeyword('');
    onSubmit(keyword);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <InputField
        label="Pesquisar ações"
        name="keyword"
        value={keyword}
        placeholder="Digite a melhor ação que lhe vier à mente"
        onChange={event => setKeyword(event.target.value)}
      />
      <Button label="Pesquisar" primary />
    </Container>
  );
};

export default Search;
