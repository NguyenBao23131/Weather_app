// components
import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

import { GEO_API_URL, geoApiOptions } from '../api';

const Search = ({ onSearchChange }) => {

  const [search, setSearch] = useState(null);

  const handleOnChange  = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  }

  const loadOptions = (inputValue) => {
    return fetch(`${GEO_API_URL}/adminDivisions?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  }

  return (
    <>
      <AsyncPaginate
        placeholder='Search for city'
        debounceTimeout={500}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </>
  )
}

export default Search