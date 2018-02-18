import { combineReducers } from 'redux';
import post from './post';
import category from './category';
import comment from './comment'

export default combineReducers({
  post,
  category,
  comment
});
