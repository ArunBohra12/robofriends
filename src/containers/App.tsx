import { ChangeEvent, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../models/reactReduxHooks';
import { setSearchField, requestRobots } from '../redux/actions/actions';
import { Robot } from '../models/types';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

import './App.css';

const App = () => {
  const state = useAppSelector(state => state);
  const dispatch = useAppDispatch();

  const {
    searchRobots: { searchField },
    requestRobots: { isPending, robots, error },
  } = state;

  const onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void = e => {
    dispatch(setSearchField(e.target.value));
  };

  useEffect(() => {
    requestRobots(dispatch);
  }, []);

  const filteredRobots = robots.filter((robot: Robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

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
