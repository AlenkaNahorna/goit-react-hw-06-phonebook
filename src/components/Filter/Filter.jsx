import { useSelector, useDispatch } from 'react-redux';
import { filterItems } from '../../redux/contactsSlice';
import { getFilterWord } from '../../redux/selectors';
import { Label } from 'components/ui/Label/Label';
import { FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterWord);

  return (
    <Label>
      Find contacts by name
      <FilterInput
        type="text"
        name="name"
        onChange={e => dispatch(filterItems(e.currentTarget.value))}
        value={filter}
      />
    </Label>
  );
};
