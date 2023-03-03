import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getContactsFilter } from "redux/selectors";
import { setContactsFilter } from "redux/filterSlice";
// import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

const Filter =()=>{
  const dispatch = useDispatch();
  const value = useSelector(getContactsFilter);

  const handleChangeFilter = e =>
    dispatch(setContactsFilter(e.target.value));

  // const value = filter.target;
return  (
  <FilterLabel>
    Find contacts by name
    <FilterInput 
      type='text' 
      name="filter"
      value={value} 
      onChange={handleChangeFilter}
    />
  </FilterLabel>
  )
}
 
export default Filter;

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };