import { 
	createStore, // used to create redux store
	applyMiddleware, // used to add a middleware library that intercept actions.
	                 // will use redux thunk 
	combineReducers  // I plan to use more than one reducer so this combines them into one big store
} from 'redux';
import thunk from 'redux-thunk'; // library that works well with closures and async actions within redux-store
import modals from '../modules/modals/reducer'



const reducers = combineReducers({
	modals
})

const middleware = [thunk] 

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),// used for debugging in the browser
  applyMiddleware(...middleware),
)