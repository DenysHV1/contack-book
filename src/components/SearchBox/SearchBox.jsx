import s from './SearchBox.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);
  const handleSearch = filter => dispatch(changeFilter(filter));

  return (
    <div className={s.searchContainer}>
      <input
        className={s.searchInput}
        onChange={evt => handleSearch(evt.target.value)}
        value={filter}
        placeholder="Find contacts by name"
      ></input>
    </div>
  );
};

export default SearchBox;
