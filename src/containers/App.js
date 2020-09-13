import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setSearchField, requestRobots} from '../actions';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Header from '../components/Header';
import ErrorBoundry from '../components/ErrorBoundry';

import './App.css';


const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField, 
        robots: state.requestRobots.robots, 
        isPending: state.requestRobots.isPending, 
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange:(event) => dispatch(setSearchField(event.target.value)), 
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component{ 
    constructor(){
        super()
        this.state = {
            robots:[], 
            searchfield:''
        }
    }


    componentDidMount(){
        this.props.onRequestRobots();
    }

    render(){
        const {searchField, onSearchChange, robots, isPending} = this.props;
        const filterRobots = robots.filter(
            robot => {
                return robot.name.toLowerCase().includes(
                    searchField.toLowerCase()
                )
            });
        return isPending ?
            <h1 className='tc'>Loading</h1> :
            (
                <div className='tc'>
                    <Header/>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filterRobots}/>
                        </ErrorBoundry>

                    </Scroll>
                </div>
            );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
