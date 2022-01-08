import React from 'react';

const SearchBox = ({searchChange}) => {
  return (
    <div className='pa2'>
      <input
        aria-label='busque sus robots'
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='busque sus robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
