import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice/filterSlice';
import { selectFilter } from '../../redux/selectors';
import { Wrapper } from './FilterField.styled';

const FilterField = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  const onFilter = value => {
    dispatch(changeFilter(value));
  };

  return (
    <Wrapper>
      <p>Find contact by name</p>
      <input
        type="text"
        value={filter}
        onChange={e => {
          onFilter(e.target.value);
        }}
      />
    </Wrapper>
  );
};

export default FilterField;
