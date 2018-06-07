import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux';
import  {Provider} from 'react-redux';
import gridReducer from './reducers/grid-reducers';


const allReducers = combineReducers({
  grid: gridReducer
})

const store = createStore(allReducers, {
  grid:Array(30).fill(Array(50).fill(false))
},
window.devToolsExtension && window.devToolsExtension()
);


const mapStateToProps = (state) =>{
  console.log(state);
  return {
    grid:state.grid
  };
}



ReactDOM.render(<Provider store={store}><App />
 </Provider>, document.getElementById('root'));
registerServiceWorker();
