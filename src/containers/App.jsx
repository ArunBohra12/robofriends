import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { setSearchField, requestRobots } from '../redux/actions/actions';

import './App.css';

const App = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const {
    searchRobots: { searchField },
    requestRobots: { isPending, robots, error },
  } = state;

  const onSearchChange = e => dispatch(setSearchField(e.target.value));

  useEffect(() => {
    dispatch(() => requestRobots(dispatch));
  }, []);

  const filteredRobots = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  if (error) {
    return <h1 className='tc mt5'>Something bad happened!</h1>;
  }

  if (isPending) {
    return <h1 className='tc mt5'>Loading...</h1>;
  }

  return (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
};

export default App;
