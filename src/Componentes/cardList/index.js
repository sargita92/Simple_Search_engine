import React from 'react';
import Card from '../card';



function CardList({robots}){

    return(

        <div>
           {robots.map((robot, i) => {return(<Card key={i}  id={robot.id} name={robot.name} email={robot.email}/>)})}
        </div>

    );

}

export default CardList;