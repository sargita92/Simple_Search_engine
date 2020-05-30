import React from 'react';
import './style.css';


function SearchBox({searchChange}){

    return (

        <div className='pa2 searchBar'>

            <input onChange={searchChange} className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='search robot'/>

        </div>

    ); 

}

export default SearchBox;