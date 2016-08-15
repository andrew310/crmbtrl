import React from 'react';
import {render} from 'react-dom';
import { observable } from 'mobx';


const Input = require('./form.js');

const appState = observable({
  name : 'dude'
})

appState.setName = function(n){
  this.name = n;
}

class App extends React.Component {
    render(){
        return (
            <div>
              <Input store={appState}/>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
