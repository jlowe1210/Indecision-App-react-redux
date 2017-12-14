import './styles/base.css'



//COMPONENTS
import React, { Component } from 'react';
import Header from './components/Header/header';
import Action from './components/Action/action';
import OptionsList from './containers/OptionsList/optionlists'
import AddOption from './containers/addOption/addoption'



//REDUX && REACT-REDUX
import store from './Reducers/index';
import {createStore} from 'redux'
import {Provider} from 'react-redux';



const rootStore = createStore(store);

rootStore.subscribe(()=>{
  localStorage.setItem('options', JSON.stringify(rootStore.getState().options))
})

class App extends Component {
  render() {
    return (
      <Provider store={rootStore}>
        <div>
          <Header  />
          <div className='body-containter'>
            <Action />
            <div className='widget'>
              <OptionsList />
              <AddOption />
            </div>
          </div>
        </div>
      </Provider>

      
    );
  }
}

export default App;
