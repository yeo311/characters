import * as API from '../api/character';

const INIT_LIST = 'INIT_LIST';
const GET_MORE_LIST = 'GET_MORE_LIST';
const CHANGE_FILTER = 'CHANGE_FILTER';
const INCREASE_PAGE = 'INCREASE_PAGE';
const INIT_PAGE = 'INIT_PAGE';
const SET_PAGE = 'SET_PAGE';
const DELETE_ITEM = 'DELETE_ITEM';
const RESTORE_ITEMS = 'RESTORE_ITEMS';

export const initCharacters = () => async (dispatch, getState) => {
  try {
    const { page, filter } = getState().characterList;
    const characters = await API.getCharacters(page, filter);
    dispatch({ type: INIT_LIST, list: characters });
  } catch (e) {
    console.log(e);
  }
};

export const changeFilters = (name, value) => async (dispatch, getState) => {
  dispatch({ type: CHANGE_FILTER, name, value });
  dispatch({ type: INIT_PAGE });
  try {
    const { page, filter } = getState().characterList;
    const characters = await API.getCharacters(page, filter);
    dispatch({ type: INIT_LIST, list: characters });
  } catch (e) {
    console.log(e);
  }
};

export const increasePage = () => async (dispatch, getState) => {
  if (getState().characterList.page < 10) {
    dispatch({ type: INCREASE_PAGE });
    try {
      const { page, filter } = getState().characterList;
      const characters = await API.getCharacters(page, filter);
      dispatch({ type: GET_MORE_LIST, list: characters });
    } catch (e) {
      console.log(e);
    }
  }
};

export const setPage = (page) => async (dispatch, getState) => {
  dispatch({ type: SET_PAGE, page });
  try {
    const { filter } = getState().characterList;
    const characters = await API.getCharacters(page, filter);
    dispatch({ type: INIT_LIST, list: characters });
  } catch (e) {
    console.log(e);
  }
};

export const deleteItem = (id) => async (dispatch) => {
  dispatch({ type: DELETE_ITEM, id });
};

export const restoreItems = () => async (dispatch) => {
  dispatch({ type: RESTORE_ITEMS });
};

const initialState = {
  page: 1,
  filter: {
    alive: false,
    women: false,
    tvSeries: false,
  },
  list: [],
};

export default function characterList(state = initialState, action) {
  switch (action.type) {
    case INIT_LIST:
      return {
        ...state,
        list: action.list,
      };
    case GET_MORE_LIST:
      return {
        ...state,
        list: state.list.concat(action.list),
      };
    case CHANGE_FILTER:
      return {
        ...state,
        filter: { ...state.filter, [action.name]: action.value },
      };
    case INCREASE_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.page,
      };
    case INIT_PAGE:
      return {
        ...state,
        page: 1,
      };
    case DELETE_ITEM:
      return {
        ...state,
        list: state.list.map((item) => {
          if (item.url === action.id) {
            item.isDeleted = true;
          }
          return item;
        }),
      };
    case RESTORE_ITEMS:
      return {
        ...state,
        list: state.list.map((item) => {
          item.isDeleted = false;
          return item;
        }),
      };
    default:
      return state;
  }
}
