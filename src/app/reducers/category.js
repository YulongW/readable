import { 
  RECEIVE_CATEGORIES
} from '../actions/category'

function category(state = {}, action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories]
      }
    default:
      return state;
  }
}

export default category;