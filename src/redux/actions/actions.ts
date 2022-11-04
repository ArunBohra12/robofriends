import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { Robot } from '../../models/types';
import * as constants from '../constants';

export const setSearchField = (text: string) => ({
  type: constants.CHANGE_SEARCH_FIELD,
  payload: text,
});

export const requestRobots = (dispatch: Dispatch<AnyAction> | any): void => {
  dispatch({ type: constants.REQUEST_ROBOTS_PENDING });

  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res: Response) => res.json())
    .then((users: Robot[]) => dispatch({ type: constants.REQUEST_ROBOTS_RESOLVED, payload: users }))
    .catch(error => dispatch({ type: constants.REQUEST_ROBOTS_REJECTED, payload: error }));
};
