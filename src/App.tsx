
import React from 'react';
import {useSelector,useDispatch } from 'react-redux';
import { decrement, increment } from './action/counterAction';
import Button from '@material-ui/core/Button'; 
import { makeStyles } from "@material-ui/core/styles";

import './App.css';

makeStyles(theme => ({
  button: {
    margin: theme.spacing(2)
  },
  input: {
    display: "none"
  }
}));




type State = {
  count: number
  }
const App = () => { 
  
  const dispatch = useDispatch();

  const counter = useSelector((state:State) =>state.count );
 
  return (

    <div className = "App">
      <h1>Counter App with React-Redux</h1>
      <h2>Counter: {counter}</h2>
      <Button 
        variant="contained"
        color="secondary"
        onClick = {() => dispatch(increment())}>Increase Counter
      </Button>

      <Button 
        variant="contained"
        color="primary"
        onClick={() => dispatch(decrement())}>Decrease Counter
      </Button>  
    </div>
  )
};



export default App;
