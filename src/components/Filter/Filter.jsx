import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <>
      <Label>
        Find contacts by name
        <Input
          placeholder="Enter name"
          onChange={e => dispatch(setFilter(e.target.value))}
          value={filter}
          type="text"
        />
      </Label>
    </>
  );
};
