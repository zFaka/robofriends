import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchfield, searchChange}) => { 
    return(
        <div className='pa2'>
            <input
                className='pa2 ba b--blue bg-lightest-blue'
                type="search" 
                placeholder='Find your mate' 
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;
