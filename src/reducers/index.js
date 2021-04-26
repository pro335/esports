import { combineReducers } from 'redux';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'

// Import custom components
import gameReducer from './game';
import filtersReducer from './filters';
import auth from './auth';
import user from './user';

const appReducer = combineReducers({
    auth:auth,
    user:user,
    filters:filtersReducer,
    game:gameReducer,
    Intl
});

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
      state = undefined
    }  
    return appReducer(state, action)
  }

export default rootReducer;