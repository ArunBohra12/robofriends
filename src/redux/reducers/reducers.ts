import * as constants from '../constants';
import { GetRobots, GetRobotsAction, RobotsSearchAction, SearchState } from '../../models/reducerTypes';

const initialStateSearch: SearchState = {
  searchField: '',
};

const initialStateRobots: GetRobots = {
  isPending: false,
  robots: [],
  error: '',
};

export const searchRobots = (state = initialStateSearch, action: RobotsSearchAction): SearchState => {
  const { type, payload } = action;

  switch (type) {
    case constants.CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: payload });

    default:
      return state;
  }
};

export const requestRobots = (state = initialStateRobots, action: GetRobotsAction): GetRobots => {
  const { type, payload } = action;

  switch (type) {
    case constants.REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, {
        isPending: true,
        robots: [],
        error: '',
      });

    case constants.REQUEST_ROBOTS_RESOLVED:
      return Object.assign({}, state, {
        isPending: false,
        robots: payload,
        error: '',
      });

    case constants.REQUEST_ROBOTS_REJECTED:
      return Object.assign({}, state, {
        isPending: false,
        robots: [],
        error: payload,
      });

    default:
      return state;
  }
};
