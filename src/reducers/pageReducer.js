import {
  NEXT_PAGE,
  FIRST_PAGE,
  PREVIOUS_PAGE,
  LAST_PAGE,
  SEARCH_USER
} from "../actions/actionTypes";
import data from "../data/user_data.json";
const defaultState = {
  currentPageNumber: 1,
  users: data,
  searchedText: ''
};

const PageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FIRST_PAGE:
      const firstPageState = {
        ...state,
        currentPageNumber: 1
      };
      return firstPageState;
    case PREVIOUS_PAGE:
      const previousPage = state.currentPageNumber - action.payload;
      if (previousPage !== 0) {
        const previousPageState = {
          ...state,
          currentPageNumber: previousPage
        };
        return previousPageState;
      }
      return state;
    case NEXT_PAGE:
      const nextPageState = {
        ...state,
        currentPageNumber: state.currentPageNumber + action.payload
      };
      return nextPageState;
    case LAST_PAGE:
      const lastPageState = {
        ...state,
        currentPageNumber: action.payload
      };
      return lastPageState;
    case SEARCH_USER:
      const searchedUser = {
        ...state,
        searchedText: action.payload
      };
      return searchedUser;
    default:
      return state;
  }
};

export default PageReducer;
export const userList = defaultState.users;
export const getUserDetails = id => defaultState.users[id - 1];
export const getUserByName = (searchedTest) => {
  let searchedUsers = [];
  defaultState.users.map(user => {
    const { firstName, lastName } = user;
    if(firstName.includes(searchedTest) || lastName.includes(searchedTest)) {
      searchedUsers.push(user);
    }
  });
  return searchedUsers;
};
