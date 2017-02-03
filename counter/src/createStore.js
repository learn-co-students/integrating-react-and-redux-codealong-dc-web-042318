import { render } from './index.js'

export default function createStore(reducer){
    let state;

    function dispatch(action){
      state = reducer(state, action)
      console.log(`the state is ${state.count}`)
      console.log(`the action is ${action.type}`)
      render()
    }

    function getState(){
      return state;
    }


    dispatch({type: '@@INIT'})
    return {dispatch: dispatch, getState: getState}

  }

  function render(){

  }
