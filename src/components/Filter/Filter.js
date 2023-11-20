import { useSelector, useDispatch } from 'react-redux';
import { filterValue } from '../../redux/contacts/filterSlice';
import { LabelFilter, InputFilter } from '../Filter/Filter.styled';
import { selectFilter } from '../../redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const onFilterChange = event => {
    dispatch(filterValue(event.target.value));
  };

  const filter = useSelector(selectFilter);

  return (
    <>
      <LabelFilter>
        Find contacts by name
        <InputFilter
          type="text"
          value={filter}
          onChange={onFilterChange}
          placeholder="Filter by name..."
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        ></InputFilter>
      </LabelFilter>
    </>
  );
};
