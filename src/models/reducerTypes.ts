import { Robot } from './types';

// Types for searching robots using their name
export interface SearchState {
  searchField: string;
}

export interface RobotsSearchAction {
  type: string;
  payload: SearchState;
}

// Types for getting the robots from the api
export interface GetRobots {
  isPending: boolean;
  robots: Robot[];
  error: unknown;
}

export interface GetRobotsAction {
  type: string;
  payload: GetRobots;
}
