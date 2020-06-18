import React, { Component } from 'react';
import ButtonAppBar from './TopAppBar';
import Paper from '@material-ui/core/Paper';
import Hello from './Hello';
import './style.css';
import { render } from 'react-dom';





function App(props) {
    const name = "React";

  
    return (
      <>
      <ButtonAppBar/>

      <div>
        <Hello name="react"/>
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
      </>
    );
  
}

render(<App />, document.getElementById('root'));
