import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleQueryChange = evt => {
    setSearchQuery(evt.currentTarget.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={searchQuery}
        onChange={handleQueryChange}
      ></Input>
      <Button type="submit">Search</Button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
