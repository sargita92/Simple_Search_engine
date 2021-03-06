import React, {Component} from 'react';

import CardList from './Componentes/cardList';
import SearchBox from './Componentes/searchBox';
import Scroll from './Componentes/scroll';
import api from './Services/api';
import './App.css'

class App extends Component {
    constructor() {
      super()
      this.state = {
        robots: [],
        searchfield: ''
      }
    }
  
    async componentDidMount() {
        const response  = await api.get('/users');
        const {data}    = response;
        this.setState({ robots: data});
     
    }
  
    onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value })
    }
  
    render() {
      const { robots, searchfield } = this.state;
      const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
      })
        return !robots.length ?
        (

            <div className='tc'>
                <h1 className='f1'>Loading RoboFriends...</h1>
            </div>

        ) :
        (
          <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <CardList robots={filteredRobots} />
            </Scroll>
          </div>
        );
    }
  }

export default App;