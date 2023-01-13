import { FilterLabel, FilterInput } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/filter/filter-slice';
import { selectFilter } from '../../redux/selectors';

export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const changeFilter = e => {
    dispatch(updateFilter(e.currentTarget.value));
  };

  return (
    <FilterLabel>
      Find contacts by name:
      <FilterInput type="text" value={filter} onChange={changeFilter} />
    </FilterLabel>
  );
}
