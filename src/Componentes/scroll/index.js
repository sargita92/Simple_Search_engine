import React from 'react';

import './style.css';



function Scroll(props){

    return( 

        <div className='scroll'>

            {props.children}

        </div>

     );

}

export default Scroll;