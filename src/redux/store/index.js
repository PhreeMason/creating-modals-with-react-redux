import { 
	createStore, // used to create redux store
	applyMiddleware, // used to add a middleware library that intercept actions.
	                 // will use redux thunk 
	combineReducers  // I plan to use more than one reducer so this combines them into one big store
} from 'redux';





// const reducers = combineReducers({
// 	red1,
// 	red2,
// 	red3
// })

const middleware = [thunk] // library that works well with closures and async actions within redux-store

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),// used for debugging in the browser
  applyMiddleware(...middleware),
)