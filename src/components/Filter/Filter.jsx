import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';
import { useState } from 'react';

export const Filter = () => {
  const [filter, setFilter] = useState('');

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  

  return (
    <>
      <Label>
        Find contacts by name
        <Input
          placeholder="Enter name"
          onChange={changeFilter}
          value={filter}
          type="text"
        />
      </Label>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
