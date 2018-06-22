import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux';
import  {Provider} from 'react-redux';
import gridReducer from './reducers/grid-reducers';
import speedReducer from './reducers/speed-reducers';
import generationReducer from './reducers/generations-reducer';

export const WIDTH = 50;
export const HEIGHT = 30;
const allReducers = combineReducers({
  grid: gridReducer,
  speed:speedReducer,
  generation:generationReducer
})

const store = createStore(allReducers, {
  grid:Array(HEIGHT).fill(Array(WIDTH).fill(false)),
  speed:300,
  generation:0
}
);






ReactDOM.render(<Provider store={store}><App />
 </Provider>, document.getElementById('root'));
registerServiceWorker();
